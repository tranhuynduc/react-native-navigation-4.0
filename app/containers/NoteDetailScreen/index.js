import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../actions/actions';
import DismissKeyboard from '../../components/DismissKeyboard';
import {
  Button,
  Text,
  Card,
  Title,
  Subheading,
  TextInput,
} from 'react-native-paper';
import { Spacing } from '../../styled/Layout';
import ImagePicker from 'react-native-image-picker';

import Geocoder from 'react-native-geocoding';
export class NoteDetailScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      address: null,
      title: '',
      description: '',
      image: null,
      message: '',
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const location = navigation.getParam('location');

    Geocoder.from({
      lat: location.latitude,
      lng: location.longitude,
    }).then(json => {
      this.setAddress(json.results[0].formatted_address);
    });
  }

  setImage = source => this.setState({ image: source });

  handleChangeTitle = text => this.setState({ title: text });

  setAddress = address => this.setState({ address });

  handleChangeDescription = text => this.setState({ description: text });

  handleImage = response => {
    if (response.didCancel) {
      this.setState({ message: 'User cancelled image picker' });
    } else if (response.error) {
      this.setState({
        message: `ImagePicker Error: ${response.error}`,
      });
    } else if (response.customButton) {
      this.setState({
        message: `User tapped custom button:,${response.customButton}`,
      });
    } else {
      const source = { uri: response.uri };
      this.setImage(source);
    }
  };

  createNote = () => {
    const { title, description, image, address } = this.state;
    const { dispatch, navigation } = this.props;
    dispatch(
      addNote({
        address,
        title,
        description,
        image,
      }),
    );
    navigation.navigate('Statistic');
  };

  render() {
    const { title, description, image, address } = this.state;
    return (
      <DismissKeyboard>
        <Card style={{ flex: 1 }}>
          <Card.Content>
            <Title>Add more detail for the note</Title>
            <TextInput
              mode="outlined"
              label="Title"
              value={title}
              onChangeText={this.handleChangeTitle}
            />
            <Spacing />

            <TextInput
              mode="outlined"
              label="Description"
              multiline
              value={description}
              onChangeText={this.handleChangeDescription}
            />
            <Spacing />
            <Text>
              <Subheading style={{ fontWeight: 'bold' }}>Address</Subheading>:{' '}
              {address}
            </Text>
            <Spacing />
            <Button
              // icon="camera"
              data-test="button-upload"
              mode="contained"
              onPress={() => ImagePicker.showImagePicker({}, this.handleImage)}>
              Open Image Library
            </Button>
            <Spacing />

            <Card.Cover source={image} />
            <Spacing gap={20} />

            <Button icon="note" mode="contained" onPress={this.createNote}>
              Create New Note
            </Button>
          </Card.Content>
        </Card>
      </DismissKeyboard>
    );
  }
}

export default connect()(NoteDetailScreen);
