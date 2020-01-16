import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import {
  Container,
  StyledLayout,
  FormControl,
  FormGroup,
  FormLabel,
  StyledButton,
  Paragraph,
} from '../../styled/Layout';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

    navigation.navigate('Statistic');
  };
  return (
    <Container>
      <FormGroup>
        <FormLabel>Username</FormLabel>
        <FormControl
          placeholder="Input your username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Password</FormLabel>
        <FormControl
          placeholder="Input your password"
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </FormGroup>
      <StyledButton color="primary" onPress={() => login()}>
        <Paragraph color="white">Login</Paragraph>
      </StyledButton>
      {error !== '' && (
        <Paragraph color="danger" align="left">
          {error}
        </Paragraph>
      )}
    </Container>
  );
};

export default LoginScreen;
