import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@components/styledComponents/theme';
import Preloader from '@components/preloader/index';

describe('<Preloader/>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Preloader show={true} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
