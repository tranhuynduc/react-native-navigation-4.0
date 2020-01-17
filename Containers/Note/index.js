import React from 'react';
import { View, Text } from 'react-native';
import { Paragraph } from '../../styled/Layout';

const NoteItem = ({ note }) => {
  return (
    <View>
      {note.split(',').map((data, index) => {
        return <Paragraph key={index}>{data}</Paragraph>;
      })}
    </View>
  );
};

export default NoteItem;
