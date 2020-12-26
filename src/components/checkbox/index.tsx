import React from 'react';
import Icon from './icons';
import { Container, Label } from './style';

interface Props {
  label: string;
  checked: boolean;
  onClick: (event: React.MouseEvent) => void;
}

export default function CheckBox({ checked = false, onClick, label }: Props) {
  return (
    <Container onClick={onClick}>
      <Icon checked={checked} />
      <Label>{label}</Label>
    </Container>
  );
}
