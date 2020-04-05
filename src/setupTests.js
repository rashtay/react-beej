// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './constants/global';

configure({ adapter: new Adapter() });

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 *
 * @function  findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
global.findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
