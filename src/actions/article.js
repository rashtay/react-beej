/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * Actions for article related operations
 * @flow
 */
import api from 'utils/api';
import { ARTICLE_TYPES } from 'action-type';

export const getArticles = () => (dispatch: Function) =>
  api.get(
    'posts/1',
    {
      eventBase: ARTICLE_TYPES.ARTICLE,
    },
    dispatch
  );
