import 'react-native';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('react-native-mock-render/mock');
import Geocoder from 'react-native-geocoding';
Geocoder.init('AIzaSyCgBFyz0TSOsXmIt49tzif9bnz9DjIW06k');
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
