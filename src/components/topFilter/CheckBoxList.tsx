import React, { useContext, useState } from 'react';
import CheckBox from '@components/checkbox';
import { ListOptions, ListOptionsContainer, TopicTitle } from './style';

export interface CheckboxItemProps {
  id: number;
  label: string;
  checked: boolean;
}

interface Props {
  title: string;
  items: CheckboxItemProps[];
  onChange: (item: CheckboxItemProps) => void;
  widthFactory?: number;
}

export default function CheckBoxList({ title, items, onChange, widthFactory }: Props) {
  return (
    <ListOptionsContainer factory={widthFactory}>
      <TopicTitle>{title}</TopicTitle>
      <ListOptions>
        {items.map((item: CheckboxItemProps) => (
          <CheckBox
            key={item.id}
            checked={item.checked}
            label={item.label}
            onClick={() => onChange(item)}
          />
        ))}
      </ListOptions>
    </ListOptionsContainer>
  );
}
