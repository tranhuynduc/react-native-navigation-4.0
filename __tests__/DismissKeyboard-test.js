import 'react-native';
import React from 'react';
import DismissKeyboard from '../app/components/DismissKeyboard';
import { Keyboard } from 'react-native';
import { shallow } from 'enzyme';

describe('DismissKeyboard', () => {
  Keyboard.dismiss = jest.fn();
  it('should render with given state from Redux store', () => {
    <DismissKeyboard />;
    const wrapper = shallow(<DismissKeyboard />);
    console.log(wrapper.debug());
    wrapper.props().onPress();
    expect(Keyboard.dismiss).toHaveBeenCalled();
  });
});
