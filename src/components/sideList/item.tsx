import React, { useContext, useState } from 'react';
import { RestaurantListItem } from '@app/utils/defines';
import { Label, ListItem } from './style';

interface Props {
  item: RestaurantListItem;
  onClick: (item: RestaurantListItem) => void;
}

export default function Item({ item, onClick }: Props) {
  return (
    <ListItem onClick={() => onClick(item)}>
      <Label>{item.name}</Label>
    </ListItem>
  );
}
