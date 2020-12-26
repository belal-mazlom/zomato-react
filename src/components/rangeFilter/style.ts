import styled from 'styled-components';
import { Handle as HandleSlider } from 'rc-slider';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1.6rem;
`;

export const Title = styled.h2`
  color: ${props => props.theme.txtColor};
  font-size: 1.2rem;
  font-weight: 600;
  flex: 1;
  flex-grow: 1;
  width: 100%;
  text-align: left;
  padding-left: 2rem;
  margin: 0 0 0.4rem 0;
`;

export const RangContainer = styled.div`
  flex-grow: 1;
  margin: 0.4rem 2rem 2rem;
  width: 25rem;
  .rc-slider-handle.rc-slider-handle-dragging {
    box-shadow: 0 0 0.5rem ${props => props.theme.primaryColor};
  }
  .rc-slider-mark-text-active {
    color: ${props => props.theme.txtColor};
    margin-top: 0.4rem;
  }
  .rc-slider-tooltip-inner {
    min-width: 3rem;
  }
`;

export const Handle = styled(HandleSlider)`
  width: 2rem;
  height: 2rem;
  border-color: ${props => props.theme.primaryColor};
`;
