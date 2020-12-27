import React, { useEffect, useState } from 'react';
import { defaultTheme } from '@styledComponents/theme';
import { Label, PropertyContainer, PropertyTitle, PropertyValue, TimeValues } from './style';

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

export default function TimeItem({ title, value, label, labelColor }: Props) {
  const [times, setTimes] = useState<string[]>([]);
  useEffect (() => {
    const items = value ? value.split('),') : [];
    for (let i = 0; i < items.length - 1; i++) {
      items[i] += ')';
    }
    setTimes (items);
  }, [value]);

  return (
    <PropertyContainer>
      <PropertyTitle>{title}</PropertyTitle>
      <PropertyValue>
        <TimeValues>
          {times.map (time => (<div key={time}>{time}</div>))}
        </TimeValues>
        {label && <Label backColor={labelColor || LabelColor.success}>{label}</Label>}
      </PropertyValue>
    </PropertyContainer>
  );
}