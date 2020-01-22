import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const DismissKeyboard = ({ children }) => {
  console.log('component');
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log('dissmiss');
        Keyboard.dismiss();
      }}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
