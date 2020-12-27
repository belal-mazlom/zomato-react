import React, { useContext } from 'react';
import { ThemeContext as StyledThemeContext } from 'styled-components';
import { defaultTheme, ThemeContext } from '@styledComponents/theme';
import { ButtonContainer } from './style';

export default function ToggleTheme () {
  const theme = useContext(StyledThemeContext);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <ButtonContainer onClick={toggleTheme}>{theme === defaultTheme ? 'Dark mode' : 'Light mode'}</ButtonContainer>
  );
}