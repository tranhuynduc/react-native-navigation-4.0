import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
const ListScreen = ({ notes }) => {
  return (
    <View>
      <Text>List Notes</Text>
      {notes.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default connect(state => ({
  notes: state.map.address,
}))(ListScreen);
