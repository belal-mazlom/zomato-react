import React from 'react';
import { Restaurant } from '@utils/defines';
import { Label, ListItem } from './style';

interface Props {
  item: Restaurant;
  selected: boolean;
  onClick: (item: Restaurant) => void;
}

export default function Item({ item, onClick, selected }: Props) {
  return (
    <ListItem onClick={() => onClick(item)} isSelected={selected}>
      <Label>{item.name}</Label>
    </ListItem>
  );
}
