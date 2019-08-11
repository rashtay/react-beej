/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * Combine all reducers
 * @flow
 */
import { combineReducers } from 'redux';
import user from './user';
import article from './article';

const rootReducer = combineReducers({
  user,
  article,
});

export default rootReducer;
