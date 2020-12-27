import React from 'react';
import { Container, Loader } from './style';

interface Props {
  show: boolean;
}

export default function Preloader({ show = false }: Props) {
  if (!show) {
    return <></>;
  }

  return (
    <Container>
      <Loader>
        <img src={require('@images/zomato.svg')} />
        <span>Loading ...</span>
      </Loader>
    </Container>
  );
}
