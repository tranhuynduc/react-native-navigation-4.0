import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Paragraph, FlexItem } from '../../styled/Layout';
import NoteItem from '../Note';

const StatisticScreen = ({ notes }) => {
  const latestNote = notes[notes.length - 1];
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
        <FlexItem>
          <Paragraph size={22} underline gap={12}>
            Latest note:
          </Paragraph>
          <NoteItem note={latestNote} />
        </FlexItem>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  notes: state.map.notes,
});

export default connect(mapStateToProps, null)(StatisticScreen);
