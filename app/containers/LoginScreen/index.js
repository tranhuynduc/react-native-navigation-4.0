import React, { useState } from 'react';
import { Button, Card, Paragraph, TextInput } from 'react-native-paper';
import { Spacing } from '../../styled/Layout';
import DismissKeyboard from '../../components/DismissKeyboard';
class LoginScreen extends React.Component {
  static navigationOptions = {
    noMenu: true,
  };

  constructor() {
    super();
    this.state = {
      username: 'Admin',
      password: '123',
      error: '',
    };
  }

  handleLogin = () => {
    const { username, password } = this.state;
    const { navigation } = this.props;
    if (!username) {
      return this.setState({ error: 'Please input your username' });
    }

    if (!password) {
      return this.setState({ error: 'Please input your password' });
    }

    navigation.navigate('Statistic');
  };

  handleChangeUsername = text => this.setState({ username: text });
  handleChangePassword = text => this.setState({ password: text });

  render() {
    const { username, password, error } = this.state;
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
              placeholder="Input your username"
              value={username}
              onChangeText={this.handleChangeUserName}
              data-test="input-username"
            />
            <TextInput
              label="Password"
              mode="outlined"
              value={password}
              onChangeText={this.handleChangePassword}
              data-test="input-password"
            />
            <Spacing />
            <Button icon="account" mode="contained" onPress={this.handleLogin}>
              Login
            </Button>
            <Paragraph>{error}</Paragraph>
          </Card.Content>
        </Card>
      </DismissKeyboard>
    );
  }
}

export default LoginScreen;
