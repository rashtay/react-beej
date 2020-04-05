/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * API Wrapper for the app
 * @flow
 */
import { format } from './query-params';

const { BASE_URL } = process.env;

const ERR_CODE = {
  unauthorized: 401,
};

// Please change the content-type property as per your need
type FetchHeaders = {
  'content-type': 'application/json',
  authorization?: string,
};

type FetchOptions = {
  method: string,
  mode: string,
  headers: FetchHeaders,
};

/**
 * Supported HTTP verbs to implement as methods.
 * @private
 */
const methods: Array<HTTPVerb> = ['get', 'post', 'put', 'patch', 'delete'];

/**
 * Create the event base for use as a Redux action type.
 *
 * @param {HTTPVerb} method - HTTP verb.
 * @param {string} event - String.
 *
 * @example
 *
 *   createEventBase('get', 'friends_list');
 *   #=> 'GET_FRIENDS_LIST'
 *
 * @returns {string}
 */
const createEventBase = (method: HTTPVerb, event: string): string =>
  `${method}_${event}`.toUpperCase();

/**
 * Parse the API endpoint string.
 *
 * @param {string} endpoint - Endpoint.
 * @param {string} customBaseUrl - Custom base URL ex: Third Party URLs.
 *
 * @example
 *
 *   parseEndpoint('article/block/') #=> 'http://host/article/block/'
 *
 * @returns ParsedEndpoint: string
 */
const parseEndpoint = (
  endpoint: string,
  customBaseUrl?: string = '',
): string => {
  const tailoredBaseURL = customBaseUrl || BASE_URL;

  return tailoredBaseURL ? `${tailoredBaseURL}/${endpoint}` : '';
};

/**
 * Check if a reponse is JSON data.
 *
 * @param {Response} resp - Fetch API Response object.
 *
 * @returns {boolean}
 */
const isJson = (resp) =>
  resp.headers.get('content-type') === 'application/json';

/**
 * API wrapper.
 *
 * @param {string} endpoint - Endpoint to request.
 * @param {object} options - Options object for `fetch`.
 * @param {function} dispatch - Callback function.
 *
 * @returns {promise}
 */
function api(
  endpoint: string,
  options: Object = {},
  dispatch: Dispatch = (): void => {},
) {
  const url = parseEndpoint(endpoint, options.customBaseUrl);
  let fetchOptions: FetchOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
    },
  };

  /**
   * You can further extend the fetchOptions to include more options such as:
   *
   * fetchOptions.headers.authorization = getAuthorizationHeader();
   */

  // Allow overwriting default fetch options with user's custom options.
  fetchOptions = { ...fetchOptions, ...options.fetchOptions };
  const eventBase = createEventBase(fetchOptions.method, options.eventBase);
  const queryParams = { ...options.queryParams };
  const actionData = {
    ...options.actionData,
    fetchOptions,
    queryParams,
  };

  // Fire off the initial request event.
  dispatch({
    type: `${eventBase}_REQUEST`,
    ...actionData,
  });

  // Append query params.
  const finalURL = `${url}${format(queryParams)}`;

  // Handler for api and json parsing errors.
  const handleApiError = (err: Error | Object) => {
    dispatch({
      type: `${eventBase}_ERROR`,
      err: err.message,
      ...actionData,
    });

    if (options.error) {
      options.error(err);
    }

    return err;
  };

  // Handler for successful api calls.
  const handleApiSuccess = (response) => {
    dispatch({
      type: `${eventBase}_SUCCESS`,
      response,
      ...actionData,
    });

    if (options.success) {
      options.success(response);
    }

    return response;
  };

  return fetch(finalURL, fetchOptions)
    .then((resp) => {
      if (resp.ok) {
        return resp.json().then(handleApiSuccess).catch(handleApiError);
      }

      if (resp.status === ERR_CODE.unauthorized) {
        return Promise.reject(new Error('Unauthorized request'));
      }

      if (isJson(resp)) {
        return resp.json().then(handleApiError).catch(handleApiError);
      }

      return handleApiError(resp);
    })
    .catch((err) => {
      // Network error.
      dispatch({
        type: 'NETWORK_ERROR',
        attemptedAction: eventBase,
        err,
        ...actionData,
      });

      handleApiError(err);
    });
}

// Attach convenience methods to the `api` function.
methods.forEach((method: HTTPVerb): void => {
  const verb = method.toUpperCase();

  api[method] = (endpoint: string, options: Object, dispatch) => {
    const newOptions = {
      ...options,
      fetchOptions: {
        ...options.fetchOptions,
        method: verb,
      },
    };

    return api(endpoint, newOptions, dispatch);
  };
});

export default api;
