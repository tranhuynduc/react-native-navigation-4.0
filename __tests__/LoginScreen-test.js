/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow, mount } from 'enzyme';
import LoginScreen from '../app/containers/LoginScreen';
import renderer from 'react-test-renderer';
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe('Login Screen', () => {
  const props = {
    navigation: { navigate: jest.fn() },
  };
  let wrapper = null;
  let instaneOf;
  beforeEach(() => {
    wrapper = shallow(<LoginScreen {...props} />);
    instaneOf = renderer.create(<LoginScreen {...props} />).getInstance();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state username/password when input change', () => {
    const usernameValue = 'username';
    const passwordValue = 'password';
    instaneOf.handleChangeUsername(usernameValue);
    instaneOf.handleChangePassword(passwordValue);
    expect(instaneOf.state.username).toEqual(usernameValue);
    expect(instaneOf.state.password).toEqual(passwordValue);
  });

  it('should show error when user does not input username', () => {
    instaneOf.setState({ username: '' });
    instaneOf.handleLogin();
    expect(instaneOf.state.error).not.toEqual('');
  });

  it('should show error when user inputs username but does not input password', () => {
    instaneOf.setState({ username: 'admin', password: '' });
    instaneOf.handleLogin();
    expect(instaneOf.state.error).not.toEqual('');
  });

  it('should call navigate if user input username and password', () => {
    instaneOf.setState({ username: 'admin', password: 'password' });
    instaneOf.handleLogin();
    expect(props.navigation.navigate).toHaveBeenCalled();
  });
});
