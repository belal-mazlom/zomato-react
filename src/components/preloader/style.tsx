import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Loader = styled.div`
  background-color: ${props => props.theme.bgColor};
  border: 0.4rem solid ${props => props.theme.primaryColor};
  border-radius: 18rem;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18rem;
  height: 18rem;
  margin-top: -12.8rem;
  margin-left: -12.8rem;
  padding: 3rem;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: default;
  img {
    width: 18rem;
    margin-bottom: 1rem;
  }
`;