/**
 * Author: Rahul Shetty
 * Date: 7 Aug 2019
 *
 * Export all the containers from here so that it can be imported with ease from other files.
 * For example, I prefer:
 *
 * import { Header, Button, Card } from './containers'
 *
 * as opposed to
 *
 * import Header from './containers/header';
 * import Button from './containers/button';
 * import Card from './containers/card';
 *
 * e.g export { default as BackButton } from './back-button';
 *
 * Whenever you create a common component, make sure you export it from index.js
 * @flow
 */
export { default as Comp1 } from './Comp1';
