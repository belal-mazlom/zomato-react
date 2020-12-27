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
  transform: translate(0rem, 0rem);
  transition: all 0.2s linear;
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
    box-shadow: 0 0 0.4rem ${props => props.theme.txtColor};
  }
`;

export const Container = styled.div`
  padding: 3rem 10rem 1rem;
  background-color: ${props => props.theme.thirdBgColor};
  position: relative;
  transition: all 0.4s ease-in-out;
  transform: translate(0rem, 0rem);
  &.hide {
    transform: translate(0rem, -18.6rem);
    ${ToggleBtn} {
      transform: translate(0rem, 0.8rem);
      ::after {
        transform: rotate(180deg);
      }
    }
  }
`;

export const Content = styled.div`
  max-width: 100%;
  > div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

export const ListOptionsContainer = styled.div<{ factory?: number }>`
  max-height: 30rem;
  display: flex;
  flex-flow: column nowrap;
  flex: ${props => props.factory || 1};
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
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
  max-height: 11.4rem;
  margin-right: 3rem;
`;

export const LeftSide = styled.div`
  flex: 1;
`;