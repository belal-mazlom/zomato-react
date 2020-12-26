import React from 'react';
import PropTypes from 'prop-types';
import ToggleTheme from '@components/toggleTheme';
import { TopHeader, Logo, BackHome, LogoTitle } from '@styledComponents/index';

interface HeaderProps {
  siteTitle: string;
  onTop: boolean;
}

const Header = ({ siteTitle, onTop }: HeaderProps) => {
  return (
    <TopHeader className={onTop ? 'on-top' : ''}>
      <BackHome to="/">
        <Logo />
        <LogoTitle>{siteTitle}</LogoTitle>
      </BackHome>
      <ToggleTheme />
    </TopHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
