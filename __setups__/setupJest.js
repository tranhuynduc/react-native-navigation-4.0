import 'react-native';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('react-native-mock-render/mock');

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM();
const { window } = jsdom;
function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}
copyProps(window, global);
configure({ adapter: new Adapter() });
