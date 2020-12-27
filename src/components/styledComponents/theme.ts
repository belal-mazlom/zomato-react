import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';

export const ThemeContext = createContext({
  toggleTheme: () => {},
});

export const defaultTheme: DefaultTheme = {
  primaryColor: '#50BEBF',
  secondaryColor: '#51BF56',
  txtColor: '#4e5456',
  grayColor: '#b2b6b7',
  darkColor: '#333333',
  darkGrayColor: '#777777',
  bgColor: '#F1F1F1',
  secondaryBgColor: '#E5E5E5',
  thirdBgColor: '#FFFFFF',
  sideBgColor: '#E5E5E5',
  borderColor: '#999999',
  white: '#FFFFFF',
  black: '#333333',
  red: '#bf5050',
};

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  txtColor: '#FFFFFF',
  bgColor: '#2b2b2b',
  secondaryBgColor: '#50BEBF',
  thirdBgColor: '#222222',
  sideBgColor: '#222222',
  grayColor: '#EEEEEE',
  darkColor: '#F1F1F1',
  darkGrayColor: '#E2E2E2',
};
