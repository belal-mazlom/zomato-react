import styled, { css } from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 4.3rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
`;

export const EmptyBox = styled.div`
  text-align: center;
  margin: 6rem;
  font-size: 2.8rem;
  color: ${props => props.theme.txtColor};
`;

export const Preview = styled.div`
  width: 30rem;
  height: 30rem;
  margin-left: 4.3rem;
  flex: 6;
`;
export const PreviewImage = styled.img`
  max-height: 30rem;
  max-width: 30rem;
`;
export const Details = styled.div`
  flex: 10;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${props => props.theme.darkColor};
  margin: 0;
`;
export const SubTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${props => props.theme.darkGrayColor};
  margin: 0;
`;

export const FeatureList = styled.div<{ marginTop?: number }>`
  display: flex;
  flex-direction: column;
  ${props => props.marginTop && css`margin-top: ${props.marginTop}rem;`};
`;

export const FeatureItem = styled.div<{ available: boolean }>`
  box-sizing: border-box;
  padding: 1rem 0 1rem 3rem;
  background: url(${props => props.available ? require('@images/ava.svg') : require('@images/no-ava.svg')}) no-repeat left center;
  background-size: 1.8rem;
  font-size: 1.4rem;
`;

export const PropertyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.8rem 0;
`;

export const PropertyTitle = styled.h3`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${props => props.theme.darkColor};
  text-transform: uppercase;
`;
export const PropertyValue = styled.div`
  display: flex;
  font-size: 1.8rem;
  font-weight: 400;
  color: ${props => props.theme.txtColor};
`;

export const TimeValues = styled.div`
  flex: 3;
`;

export const Label = styled.div<{ backColor: string}>`
  align-self: flex-end;
  border-radius: 0.8rem;
  background-color: ${props => props.backColor};
  display: inline-block;
  color: ${props => props.theme.white};
  padding: 0.4rem 1.4rem;
  margin-left: 1rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  width: 8rem;
`;