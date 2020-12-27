import React from 'react';
import CheckBox from '@components/checkbox';
import { CheckboxItem } from '@utils/defines';
import { ListOptions, ListOptionsContainer, TopicTitle } from './style';

interface Props {
  title: string;
  items: CheckboxItem[];
  onChange: (item: CheckboxItem) => void;
  widthFactory?: number;
}

export default function CheckBoxList({ title, items, onChange, widthFactory }: Props) {
  return (
    <ListOptionsContainer factory={widthFactory}>
      <TopicTitle>{title}</TopicTitle>
      <ListOptions>
        {items.map((item: CheckboxItem) => (
          <CheckBox
            key={item.id}
            checked={item.checked}
            label={item.name}
            onClick={() => onChange(item)}
          />
        ))}
      </ListOptions>
    </ListOptionsContainer>
  );
}
