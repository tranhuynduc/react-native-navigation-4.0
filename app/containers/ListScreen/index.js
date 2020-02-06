import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Card, Title, List, Colors } from 'react-native-paper';
import { Spacing } from '../../styled/Layout';
export const ListScreen = ({ notes, navigation }) => {
  console.log(notes);
  return (
    <Card style={{ flex: 1 }}>
      <Card.Content>
        <Title>List Notes</Title>
        <SafeAreaView>
          <FlatList
            data={notes}
            renderItem={({ item }) => {
              const { title, address } = item;
              return (
                <React.Fragment>
                  <List.Item
                    style={{
                      borderRadius: 4,
                      borderWidth: 2,
                      borderColor: Colors.indigo50,
                    }}
                    key={item.id}
                    title={title}
                    description={address}
                    onPress={() => navigation.push('NoteItem', { note: item })}
                    left={props => <List.Icon {...props} icon="note" />}
                  />
                  <Spacing />
                </React.Fragment>
              );
            }}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </Card.Content>
    </Card>
  );
};

export default connect(state => ({
  notes: state.notes,
}))(ListScreen);
