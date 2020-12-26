import styled from 'styled-components';

export const ButtonContainer = styled.div`
  width: auto;
  height: 2.8rem;
  padding: 0rem 2rem;
  line-height: 2.8rem;
  border-radius: 0.8rem;
  cursor: pointer;
  background-color: ${props => props.theme.thirdBgColor};
  color: ${props => props.theme.txtColor};
`;
