/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * Actions for user related operations
 * @flow
 */
import * as TYPE from 'action-type';

export const updateUserName = (name: string) => (dispatch: Function) => {
  dispatch({
    type: TYPE.UPDATE_USER_NAME,
    payload: { name },
  });
};
