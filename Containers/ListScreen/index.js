import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container } from '../../styled/Layout';
import { NoteItem } from '../../styled/ListItem';

const ListScreen = ({ notes }) => {
  return (
    <Container>
      <Text>List Notes</Text>
      {notes.map((item, index) => (
        <NoteItem key={index}>
          <Text>{item}</Text>
        </NoteItem>
      ))}
    </Container>
  );
};

export default connect(state => ({
  notes: state.map.address,
}))(ListScreen);
