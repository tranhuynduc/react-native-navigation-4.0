import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('123');
  const [error, setError] = useState('');

  const login = () => {
    if (!username) {
      return setError('Please input your username');
    }

    if (!password) {
      return setError('Please input your password');
    }

    navigation.navigate('App');
  };
  return (
    <View>
      <TextInput
        placeholder="Input your username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        placeholder="Input your password"
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={() => login()} />
      {error !== '' && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
};

export default LoginScreen;
