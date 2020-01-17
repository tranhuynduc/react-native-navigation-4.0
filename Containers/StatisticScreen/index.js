import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Paragraph } from '../../styled/Layout';
import NoteItem from '../Note';

const StatisticScreen = ({ notes }) => {
  const latestNote = notes[notes.length - 1].address;
  console.log('notes', latestNote);
  return (
    <Container>
      <Paragraph size={32} bold>
        Number of note:{' '}
        <Paragraph size={32} color={'orange'}>
          {' '}
          {notes.length}
        </Paragraph>
      </Paragraph>
      {notes.length > 0 && (
        <View>
          <Paragraph size={22} underline gap={12}>
            Latest note:
          </Paragraph>
          <NoteItem note={latestNote} />
        </View>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  notes: state.map.notes,
});

export default connect(mapStateToProps, null)(StatisticScreen);
