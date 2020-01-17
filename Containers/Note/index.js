import React from 'react';
import { View, Text } from 'react-native';
import { Paragraph, FlexItem } from '../../styled/Layout';
import styled from 'styled-components';

const NoteWrapper = styled(View)`
  border-bottom-color: white;
  border-bottom-width: 1px;
  padding-bottom: 6px;
  margin-vertical: 12px;
`;
const NoteItem = ({ note }) => {
  return (
    <NoteWrapper>
        {note.address.split(',').map((data, index) => {
          return <Paragraph key={index}>{data.trim()}</Paragraph>;
        })}
    </NoteWrapper>
  );
};

export default NoteItem;
