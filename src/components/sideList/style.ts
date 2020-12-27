import styled, { css } from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 0 1rem 0 0rem;
  overflow: hidden;
  height: calc(100% - 6.4rem);
`;

export const Title = styled.h2`
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
  height: 100%;
`;

export const Label = styled.span`
  font-size: 1.4rem;
  color: ${props => props.theme.txtColor};
`;

export const ListItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  padding: 1rem 0 1rem 4rem;
  border-bottom: 0.1rem solid ${props => props.theme.grayColor};
  cursor: pointer;
  ${props =>
    props.isSelected &&
    css`
      background-color: ${props.theme.primaryColor};
      ${Label} {
        color: ${props.theme.white};
      }
    `}
  &:hover {
    background-color: ${props => props.theme.primaryColor};
    ${Label} {
      color: ${props => props.theme.white};
    }
  }
`;
