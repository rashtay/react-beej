/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * Reducer for name related data
 * @flow
 */
import * as TYPE from 'action-type';

const defaultState = {
  details: {
    name: 'Rahul',
    friends: {
      activeIndex: 0,
      data: ['Bharat', 'Shravan', 'Sagar', 'Aqif', 'Manali'],
    },
  },
};

export default function user(state: Object = defaultState, action: Object) {
  switch (action.type) {
    case TYPE.UPDATE_USER_NAME: {
      const { name } = action.payload;

      const details = {
        ...state.details,
        name,
      };

      return { ...state, details };
    }
    default:
      return state;
  }
}
