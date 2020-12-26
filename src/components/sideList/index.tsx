import React, { useContext, useState } from 'react';
import { RestaurantListItem } from '@app/utils/defines';
import Item from './item';
import { Container, List, Title } from './style';

interface Props {
  data: RestaurantListItem[];
}

const data: RestaurantListItem[] = [
  {
    id: 1,
    name: 'Restaurant 1',
  },
  {
    id: 2,
    name: 'Restaurant 2',
  },
  {
    id: 3,
    name: 'Restaurant 3',
  },
  {
    id: 4,
    name: 'Restaurant 4',
  },
  {
    id: 1,
    name: 'Restaurant 1',
  },
  {
    id: 2,
    name: 'Restaurant 2',
  },
  {
    id: 3,
    name: 'Restaurant 3',
  },
  {
    id: 4,
    name: 'Restaurant 4',
  },
  
];

export default function SideList() {
  return (
    <Container>
      <Title>Result</Title>
      <List>
        {data.map((item: RestaurantListItem) => (
          <Item key={item.id} item={item} onClick={(item: RestaurantListItem) => {}} />
        ))}
      </List>
    </Container>
  );
}
