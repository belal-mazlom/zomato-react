import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

//OpenSans-Regular.ttf

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url(${require('@assets/fonts/OpenSans-Italic.ttf')}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${require('@assets/fonts/OpenSans-Light.ttf')}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${require('@assets/fonts/OpenSans-LightItalic.ttf')}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${require('@assets/fonts/OpenSans-Regular.ttf')}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${require('@assets/fonts/OpenSans-SemiBold.ttf')}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${require('@assets/fonts/OpenSans-SemiBoldItalic.ttf')}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${require('@assets/fonts/OpenSans-Bold.ttf')}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${require('@assets/fonts/OpenSans-BoldItalic.ttf')}) format('truetype');
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${require('@assets/fonts/OpenSans-ExtraBold.ttf')}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${require('@assets/fonts/OpenSans-ExtraBoldItalic.ttf')}) format('truetype');
    font-weight: 800;
    font-style: italic;
  }
  html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font: 62.5% open-sans;
  box-sizing: border-box;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
body {
  box-sizing: border-box;
  background-color: ${props => props.theme.bgColor};
  color: hsla(0, 0%, 0%, 0.8);
  color: ${props => props.theme.txtColor};
  font-family: 'Open sans', sans-serif;
  font-weight: normal;
  font-kerning: normal;
  font-feature-settings: "kern", "liga", "clig", "calt";
  margin: 0;
  transition: all 0.25s linear;
  word-wrap: break-word;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export const TopHeader = styled.header`
  align-items: center;
  background-color: ${props => props.theme.secondaryBgColor};
  display: flex;
  justify-content: space-between;
  padding: 0rem 1rem;
  height: 3.4rem;
  margin-top: 0rem;
  transition: margin-top 0.4s ease-in-out;
  &.on-top {
    margin-top: -17.2rem;
  }
`;

export const BackHome = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const Logo = styled.div.attrs({
  title: 'Logo',
})`
  background: url(${require('@images/zomato.svg')}) no-repeat 0 0;
  background-size: 9rem 3rem;
  height: 3rem;
  width: 9rem;
`;

export const LogoTitle = styled.span`
  font-size: 1.8rem;
  color: ${props => props.theme.txtColor};
  line-height: 3.1rem;
  margin: 0 1rem;
`;
