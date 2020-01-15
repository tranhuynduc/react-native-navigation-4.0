import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { addLocation } from '../../Redux/actions';

const NoteDetailScreen = ({ navigation, dispatch }) => {
  const address = navigation.getParam('address');
  const createLocation = () => {
    dispatch(addLocation(address));
    navigation.navigate('Statistic');
  };

  return (
    <View>
      <Text>Address: {address}</Text>
      <Button title="Create Note" onPress={createLocation} />
    </View>
  );
};

export default connect()(NoteDetailScreen);
