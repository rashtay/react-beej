/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * Common type definitions for the app
 * @flow
 */
type Dispatch = (data: Object) => void;

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
