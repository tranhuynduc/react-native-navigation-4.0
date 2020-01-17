import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { Container, Paragraph } from '../../styled/Layout';
import { FlatList } from 'react-native-gesture-handler';
import NoteItem from '../Note';

const ListScreen = ({ notes }) => {
  console.log(notes);
  return (
    <Container>
      <Paragraph size={24}>List Notes</Paragraph>
      {/* <FlatList
        data={notes}
        rederItem={rowData => <NoteItem note={rowData} />}
        keyExtractor={item => item.id}
      /> */}
      <SafeAreaView>
        <FlatList
          data={notes}
          renderItem={item => {
            console.log(item);
            return <NoteItem note={item} />;
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </Container>
  );
};

export default connect(state => ({
  notes: state.map.notes,
}))(ListScreen);
