import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 0 1rem 0 0rem;
`;

export const Title= styled.h2`
  text-transform: uppercase;
  color: ${props => props.theme.txtColor};
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0;
  padding: 1rem 0 1rem 4rem;
  border-bottom: 0.1rem solid ${props => props.theme.grayColor};
`;

export const List = styled.div`
  overflow-y: scroll;
`;

export const Label = styled.span`
  font-size: 1.4rem;
  color: ${props => props.theme.txtColor};
`;

export const ListItem = styled.div`
  display: flex;
  padding: 1rem 0 1rem 4rem;
  border-bottom: 0.1rem solid ${props => props.theme.grayColor};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.primaryColor};
    ${Label} {
      color: ${props => props.theme.white};
    }
  }
`;
