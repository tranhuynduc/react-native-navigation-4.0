import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { addLocation } from '../../Redux/actions';
import { Container } from '../../styled/Layout';

const NoteDetailScreen = ({ navigation, dispatch }) => {
  const address = navigation.getParam('address');
  const createLocation = () => {
    dispatch(addLocation(address));
    navigation.navigate('Statistic');
  };

  return (
    <Container>
      <Text>Address: {address}</Text>
      <Button title="Create Note" onPress={createLocation} />
    </Container>
  );
};

export default connect()(NoteDetailScreen);
