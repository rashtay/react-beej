/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * Combine all reducers
 * @flow
 */
import { combineReducers } from 'redux';
import todo from './todo';

const rootReducer = combineReducers({ todo });

export default rootReducer;
