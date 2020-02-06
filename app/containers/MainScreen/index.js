import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, FlexItem } from '../../styled/Layout';
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

  handleMapPressed = e => this.setState({ marker: e.nativeEvent.coordinate });

  renderMap = () => {
    const { marker, address } = this.state;
    return (
      <MapView
        showsUserLocation={true}
        followsUserLocation={true}
        onPress={this.handleMapPressed}
        style={{ height: '100%' }}
        initialRegion={{
          latitude: 10.7571445,
          longitude: 106.6880843,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {marker && <Marker coordinate={marker} title={address} />}
      </MapView>
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
            <Button
              testID="get-location"
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
