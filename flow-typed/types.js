/**
 * Author: Rahul Shetty
 * Date: 12/08/2019
 *
 * Common type definitions for the app
 * @flow
 */
type Dispatch = (data: Object) => void;

type Action = {
  type: string,
  payload: any,
};

type HTTPVerb =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'delete'
  | 'DELETE';
