import React from 'react';
import { connect } from 'react-redux';
import { Spacing } from '../../styled/Layout';
import {
  Button,
  Text,
  Card,
  Title,
  Subheading,
  Paragraph,
  TextInput,
} from 'react-native-paper';
import NoteItem from '../../components/NoteItem';
const StatisticScreen = ({ notes, state, navigation }) => {
  if (!notes.length) {
    return (
      <Card style={{ flex: 1 }}>
        <Card.Content>
          <Title>There are no note</Title>
          <Button
            icon="add"
            mode="contained"
            onPress={() => navigation.push('Create')}>
            Create new note?
          </Button>
        </Card.Content>
      </Card>
    );
  }

  const latestNote = notes[notes.length - 1];
  return (
    <Card style={{ flex: 1 }}>
      <Card.Content>
        <Title>Number of Note: {notes.length}</Title>
        <Text>Latest Note:</Text>
        <Spacing />
      </Card.Content>
      <Card style={{ border: `2px solid red`, borderColor: 'red' }}>
        <Card.Cover source={latestNote.image} />
        <Card.Content>
          <Title>Title: {latestNote.title}</Title>
        </Card.Content>
        <Card.Actions>
          <Button
            onPress={() =>
              navigation.push('NoteItem', { note: latestNote })
            }>
            View Detail
          </Button>
        </Card.Actions>
      </Card>
    </Card>
  );
};

const mapStateToProps = state => ({
  notes: state.notes,
  state: state,
});

export default connect(mapStateToProps, null)(StatisticScreen);
