// @flow

/**
 * Encode a key/value pair for use in GET query params.
 * @private
 *
 * @param {string} key - Key to encode.
 * @param {string} value - Value to encode.
 *
 * @returns {string}
 */
const encodePair = (key: string, value: string): string =>
  `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

/**
 * Encode a `set` of values as query params.
 * @private
 *
 * @param {[string, Array<string>]} tuple - An array where the first index is
 * a string used as the `key`, and the second is an array of strings, used
 * as the `values` to be encoded.
 *
 * @example
 *
 *   encodeSet('a', [1, 2, 3]);
 *   #=> ['a=1', 'a=2', 'a=3'];
 *
 * @returns {Array<string>} An array of encode key value pairs.
 */
const encodeSet = (tuple: [string, Array<string>]): Array<string> =>
  tuple[1].map(encodePair.bind(null, tuple[0]));

/**
 * Format an object into a query param string.
 * @public
 *
 * @param {Object} params - Query params.
 *
 * @returns {string} Formatted query params string, with ? prepended.
 */
export const format = (params: Object): string => {
  if (!params) {
    return '';
  }

  const keys = Object.keys(params);

  if (!keys.length) {
    return '';
  }

  const query = keys
    .map((key) => {
      const value = Array.isArray(params[key]) ? params[key] : [params[key]];

      return encodeSet([key, value]);
    })
    .map((set) => set.join('&'))
    .join('&');

  return `?${query}`;
};
