import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GlobalStyle, Main } from '@styledComponents/index';
import { defaultTheme, darkTheme, ThemeContext } from '@styledComponents/theme';

import Header from './header';
import { ThemeProvider } from 'styled-components';
import TopFilter from '@components/topFilter';
import Preloader from '@components/preloader';

const DefaultLayout = ({ children }: any) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [topHidden, setTopHidden] = useState(false);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const toggleTheme = () => {
    if (theme === defaultTheme) {
      return setTheme(darkTheme);
    }
    return setTheme(defaultTheme);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <>
          <TopFilter hidden={topHidden} setHidden={setTopHidden}/>
          <Header onTop={topHidden} siteTitle={data.site.siteMetadata?.title || `Title`} />
          <Main>{children}</Main>
          <Preloader show={false}/>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
