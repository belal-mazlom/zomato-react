import React from 'react';
import { PropertyContainer, PropertyTitle, PropertyValue } from './style';

interface Props {
  title: string;
  value: string;
}

export default function PropertyItem({ title, value }: Props) {
  return (
    <PropertyContainer>
      <PropertyTitle>{title}</PropertyTitle>
      <PropertyValue>
        <span>{value}</span>
      </PropertyValue>
    </PropertyContainer>
  );
}