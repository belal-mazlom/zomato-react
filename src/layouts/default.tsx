import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GlobalStyle, Main } from '@styledComponents/index';
import { defaultTheme, darkTheme, ThemeContext } from '@styledComponents/theme';
import TopFilter from '@components/topFilter';
import Preloader from '@components/preloader';
import { getCategories, getCuisines, getRestaurants, getMaxCost } from '@utils/redux/api';
import { RootState } from '@utils/defines';
import Header from './header';

const DefaultLayout = ({ children }: any) => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(defaultTheme);
  const [topHidden, setTopHidden] = useState(false);
  const loading = useSelector((state: RootState) => state.loading);

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

  useEffect (() => {
    dispatch (getCategories());
    dispatch (getCuisines());
    dispatch (getRestaurants());
    dispatch (getMaxCost());
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <>
          <TopFilter hidden={topHidden} setHidden={setTopHidden}/>
          <Header onTop={topHidden} siteTitle={data.site.siteMetadata?.title || `Title`} />
          <Main>{children}</Main>
          <Preloader show={loading}/>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
