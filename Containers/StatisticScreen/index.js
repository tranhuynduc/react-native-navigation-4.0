import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Container } from '../../styled/Layout';
import { NoteItem } from '../../styled/ListItem';

const StatisticScreen = ({ notes }) => {
  return (
    <Container>
      <Text>Statistic Screen</Text>
      <Text>Number of note: {notes.length}</Text>
      {notes.length > 0 && (
        <View>
          <Text>Latest note</Text>
          <NoteItem>
            <Text>{notes[notes.length - 1]}</Text>
          </NoteItem>
        </View>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  notes: state.map.address,
});

export default connect(mapStateToProps, null)(StatisticScreen);
