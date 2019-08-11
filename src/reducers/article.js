/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * Reducer for Article data
 * @flow
 */
import { ARTICLE_TYPES } from 'action-type';

const defaultState = {
  pending: false,
  error: null,
  byId: {},
  ids: [],
};

export default function article(state: Object = defaultState, action: Object) {
  switch (action.type) {
    case ARTICLE_TYPES.GET_ARTICLE_REQUEST:
      return { ...state, pending: true, error: null };
    case ARTICLE_TYPES.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        byId: {
          [action.response.id]: action.response,
        },
        ids: [action.response.id],
        pending: false,
        error: null,
      };
    case ARTICLE_TYPES.GET_ARTICLE_ERROR:
      return { ...state, pending: false, error: action.err };
    default:
      return state;
  }
}
