import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../actions/actions';
import Geocoder from 'react-native-geocoding';
import DismissKeyboard from '../../components/DismissKeyboard';
import {
  Button,
  Text,
  Card,
  Title,
  Subheading,
  Paragraph,
  TextInput,
} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Spacing } from '../../styled/Layout';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const NoteDetailScreen = ({ navigation, dispatch }) => {
  const location = navigation.getParam('location');
  const [address, setAddress] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  Geocoder.from({
    lat: location.latitude,
    lng: location.longitude,
  })
    .then(json => {
      console.log('get location success');

      setAddress(json.results[0].formatted_address);
    })
    .catch(error => console.warn(error));

  const handleImage = response => {
    // console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = { uri: response.uri };

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };

      setImage(source);
    }
  };

  const createNote = () => {
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

  return (
    <DismissKeyboard>
      <Card style={{ flex: 1 }}>
        <Card.Content>
          <Title>Add more detail for the note</Title>
          <TextInput
            mode="outlined"
            label="Title"
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <Spacing />

          <TextInput
            mode="outlined"
            label="Description"
            multiline
            value={description}
            onChangeText={text => setDescription(text)}
          />
          <Spacing />
          <Text>
            <Subheading style={{ fontWeight: 'bold' }}>Address</Subheading>:{' '}
            {address}
          </Text>
          <Spacing />
          <Button
            icon="camera"
            mode="contained"
            onPress={() => ImagePicker.showImagePicker({}, handleImage)}>
            Open Image Library
          </Button>
          <Spacing />

          <Card.Cover source={image} />
          <Spacing gap={20}/>

          <Button icon="note" mode="contained" onPress={() => createNote()}>
            Create New Note
          </Button>
        </Card.Content>
      </Card>
    </DismissKeyboard>
  );
};

export default connect()(NoteDetailScreen);
