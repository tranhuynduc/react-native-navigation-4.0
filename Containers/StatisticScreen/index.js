import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const StatisticScreen = ({ notes, add, dispatch }) => {
  console.log('note', notes);
  return (
    <View>
      <Text>Statistic Screen</Text>
      <Text>Number of note: {notes.length}</Text>
      {notes.length > 0 && (
        <View>
          <Text>Latest note</Text>
          <Text>{notes[notes.length - 1]}</Text>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  notes: state.map.address,
});

export default connect(mapStateToProps, null)(StatisticScreen);
