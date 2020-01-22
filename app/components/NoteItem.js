import React from 'react';

import { Colors } from 'react-native-paper';
import {
  Button,
  Text,
  Card,
  Title,
  Subheading,
  Paragraph,
  TextInput,
} from 'react-native-paper';
import { Spacing } from '../styled/Layout';

const NoteItem = ({ navigation }) => {
  const { title, description, address, image } = navigation.getParam('note');
  return (
    <Card style={{ flex: 1 }}>
      <Card.Cover source={image} />
      <Card.Content>
        <Title>Title: {title}</Title>
        <Subheading>Descrition: {description}</Subheading>
        <Text>
          <Subheading style={{ fontWeight: 'bold' }}>Address</Subheading>:{' '}
          {address}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => navigation.navigate('List')}>
          Go To List Note
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default NoteItem;
