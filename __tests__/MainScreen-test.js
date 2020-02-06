/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import MainScreen from '../app/containers/MainScreen';
import renderer from 'react-test-renderer';
import { Button } from 'react-native-paper';

jest.mock('react-native-gesture-handler', () => {});
jest.mock('react-native-maps', () => {
  const { View } = require('react-native');
  const MockMapView = props => {
    return <View>{props.children}</View>;
  };
  const MockMarker = props => {
    return <View>{props.children}</View>;
  };
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
  };
});
describe('Login Screen', () => {
  const navigation = {
    navigate: jest.fn(),
    push: jest.fn(),
    openDrawer: jest.fn(),
  };
  const props = {
    navigation,
  };
  let wrapper = null;
  let instaneOf;
  beforeEach(() => {
    wrapper = shallow(<MainScreen {...props} />);
    instaneOf = renderer.create(<MainScreen {...props} />).getInstance();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should push new screen when click on get-location', () => {
    const button = wrapper.find('[testID="get-location"]').at(0);
    button.simulate('press');
    expect(props.navigation.push).toHaveBeenCalled();
  });

  it('should update new marker when click on the map', () => {
    const map = wrapper.find('MockMapView');
    const coordinate = { lat: 10, lng: 99 };
    map.simulate('press', {
      nativeEvent: { coordinate: coordinate },
    });
    expect(wrapper.state('marker')).toEqual(coordinate);
  });

  it('should open drawer when click on header left button', () => {
    const navigationOptions = MainScreen.navigationOptions({ navigation });
    console.log(navigationOptions);
    navigationOptions.headerLeft().props.onPress();
    expect(props.navigation.openDrawer).toHaveBeenCalled();
  });
});
