import styled from 'styled-components';

export const Container = styled.div`
  margin: 0.3rem 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Check = styled.div.attrs({
  type: 'checkbox',
})`
  width: 3rem;
  height: 3rem;
`;

export const Label = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0 1rem;
  line-height: 1rem;
  user-select: none;
`;