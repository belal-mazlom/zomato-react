import styled from 'styled-components';

export const ToggleBtn = styled.button.attrs({
  type: 'button'
})`
  cursor: pointer;
  border: 0;
  border-radius: 0.8rem;
  height: 1.8em;
  width: 10rem;
  position: absolute;
  bottom: -1rem;
  left: 50%;
  margin-left: -5rem;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s linear;
  background-color: ${props => props.theme.thirdBgColor};
  ::after {
    content: ' ';
    background: url(${require('@images/up-arrow.svg')}) no-repeat center;
    background-size: 1.4rem;
    height: 1.4rem;
    width: 1.4rem;
    transition: all 0.2s linear;
    transform: rotate(0deg);
  }
  &:hover {
    box-shadow: 0 0 1rem ${props => props.theme.secondaryBgColor};
  }
`;

export const Container = styled.div`
  padding: 3rem 10rem 1rem;
  background-color: ${props => props.theme.thirdBgColor};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  transition: all 0.4s ease-in-out;
  transform: translate(0rem, 0rem);
  &.hide {
    transform: translate(0rem, -17.2rem);
    ${ToggleBtn} {
      ::after {
        transform: rotate(180deg);
      }
    }
  }
`;

export const ListOptionsContainer = styled.div`
  max-height: 30rem;
  flex-grow: 1;
`;

export const TopicTitle = styled.h2`
  color: ${props => props.theme.txtColor};
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 0.8rem 0;
  text-transform: uppercase;
`;

export const ListOptions = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  max-height: 10rem;
`;

export const LeftSide = styled.div``;