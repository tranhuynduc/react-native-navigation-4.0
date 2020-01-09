import React from 'react';
import { Button, View, Text } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is ProfileScreen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export default ProfileScreen;
