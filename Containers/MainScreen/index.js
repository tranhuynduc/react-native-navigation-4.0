import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import {
  Container,
  StyledLayout,
  StyledButton,
  Paragraph,
} from '../../styled/Layout';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

Geocoder.init('AIzaSyCgBFyz0TSOsXmIt49tzif9bnz9DjIW06k');

class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: () => (
      <Icon name="menu" size={30} onPress={() => navigation.openDrawer()} />
    ),
  });
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      address: null,
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });

        Geocoder.from({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
          .then(json => {
            const address = json.results[0].formatted_address;
            console.log('json', address);
            this.setState({
              address,
            });
          })
          .catch(error => console.warn(error));
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
  }

  render() {
    const { navigation } = this.props;
    const { address } = this.state;
    return (
      <Container>
        <StyledLayout>
          <Text>Current position: </Text>
          <Text> {this.state.latitude} </Text>
          <Text> {this.state.longitude} </Text>
          <Text> {this.state.error} </Text>
          <StyledButton
            color="primary"
            onPress={() => navigation.push('NoteDetail', { address })}>
            <Paragraph>Get address from this </Paragraph>
          </StyledButton>
        </StyledLayout>
      </Container>
    );
  }
}

export default MainScreen;
