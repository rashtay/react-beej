/**
 * Author: Rahul Shetty
 * Date: 14 Aug 2018
 *
 * Export all the components from here so that it can be imported with ease from other files.
 * For example, I prefer:
 *
 * import { Header, Button, Card } from './components'
 *
 * as opposed to
 *
 * import Header from './components/header';
 * import Button from './components/button';
 * import Card from './components/card';
 *
 * e.g export { default as BackButton } from './back-button';
 *
 * Whenever you create a common component, make sure you export it from index.js
 * @flow
 */
export { default as Todo } from './Todo';
export { default as About } from './About';
export { default as Contact } from './Contact';
