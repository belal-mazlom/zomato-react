import React from 'react';
import { defaultTheme } from '@styledComponents/theme';
import { Label, PropertyContainer, PropertyTitle, PropertyValue } from './style';

interface Props {
  title: string;
  value: string;
  label?: string;
  labelColor?: string;
}

export const LabelColor = {
  success: defaultTheme.secondaryColor,
  warning: defaultTheme.red,
};

export default function PropertyItem({ title, value, label, labelColor }: Props) {
  return (
    <PropertyContainer>
      <PropertyTitle>{title}</PropertyTitle>
      <PropertyValue>
        <span>{value}</span>
        {label && <Label backColor={labelColor || LabelColor.success}>{label}</Label>}
      </PropertyValue>
      
    </PropertyContainer>
  );
}