import React, { Component } from 'react';
import { View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
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
import { Button, Colors } from 'react-native-paper';

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
    // Geolocation.getCurrentPosition(
    //   position => {
    //     this.setState({
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //       error: null,
    //     });
    //     Geocoder.from({
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude,
    //     })
    //       .then(json => {
    //         const address = json.results[0].formatted_address;
    //         // this.setState({
    //         //   marker: position.coords,
    //         //   address,
    //         // });
    //       })
    //       .catch(error => console.warn(error));
    //   },
    //   error => this.setState({ error: error.message }),
    //   { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    // );
  }

  renderMap = () => {
    const { marker, address } = this.state;
    return (
      <MapView
        showsUserLocation={true}
        followsUserLocation={true}
        onPress={e => this.setState({ marker: e.nativeEvent.coordinate })}
        style={{ height: '100%' }}
        initialRegion={{
          latitude: 10.7571445,
          longitude: 106.6880843,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPoiClick={props => console.log(props)}>
        {marker && <Marker coordinate={marker} title={address} />}
      </MapView>
    );
  };

  render() {
    const { navigation } = this.props;
    const { address, marker } = this.state;
    console.log('marker', marker);
    return (
      <Container style={{ flex: 1 }}>
        <FlexItem>
          <FlexItem background="#ccc">{this.renderMap()}</FlexItem>
          <View style={{ flex: 0, marginVertical: 12 }}>
            <Button
              icon="map-marker"
              mode="contained"
              disabled={marker === null}
              onPress={() =>
                navigation.push('NoteDetail', { location: marker })
              }>
              Get Location
            </Button>
          </View>
        </FlexItem>
      </Container>
    );
  }
}

export default MainScreen;
