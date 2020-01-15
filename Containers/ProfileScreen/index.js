import React from 'react';
import { View, Text } from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View>
        <Text>This is profile screen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
