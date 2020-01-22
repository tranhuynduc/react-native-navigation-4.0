import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlexItem, Spacing } from '../../styled/Layout';
import DismissKeyboard from '../../components/DismissKeyboard';
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
    <DismissKeyboard>
      <Card style={{ flex: 1 }}>
        <Card.Content
          style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            label="Username"
            mode="outlined"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Spacing />
          <Button icon="account" mode="contained" onPress={() => login()}>
            Login
          </Button>
          <Spacing />

        </Card.Content>
      </Card>
    </DismissKeyboard>
  );
};

LoginScreen.navigationOptions = () => ({
  noMenu: true,
});

export default LoginScreen;
