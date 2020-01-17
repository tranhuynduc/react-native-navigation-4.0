import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import {
  Container,
  StyledLayout,
  StyledButton,
  Paragraph,
  FlexItem,
} from '../../styled/Layout';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

Geocoder.init('AIzaSyCgBFyz0TSOsXmIt49tzif9bnz9DjIW06k');

class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: () => (
      <Icon
        style={{ paddingLeft: 15 }}
        name="menu"
        size={30}
        onPress={() => navigation.openDrawer()}
      />
    ),
  });
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      address: null,
      marker: null,
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
            this.setState({
              marker: {
                latlng: {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                },
                title: address,
              },
              address,
            });
          })
          .catch(error => console.warn(error));
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
  }

  renderMap = () => {
    const { marker } = this.state;

    if (marker != null) {
      return (
        <MapView
          style={{ height: '100%' }}
          initialRegion={{
            latitude: marker.latlng.lat,
            longitude: marker.latlng.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: marker.latlng.lat,
              longitude: marker.latlng.lng,
            }}
            title={marker.title}
          />
        </MapView>
      );
    }

    return (
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Paragraph color="#000">Loading</Paragraph>
      </View>
    );
  };

  render() {
    const { navigation } = this.props;
    const { address, marker } = this.state;
    return (
      <Container style={{ flex: 1 }}>
        <FlexItem>
          <FlexItem background="#ccc">{this.renderMap()}</FlexItem>
          <View style={{ flex: 0, marginVertical: 12 }}>
            <StyledButton
              color="primary"
              disabled={address == null}
              onPress={() => navigation.push('NoteDetail', { address })}>
              <Paragraph align="center">Next </Paragraph>
            </StyledButton>
          </View>
        </FlexItem>
      </Container>
    );
  }
}

export default MainScreen;
