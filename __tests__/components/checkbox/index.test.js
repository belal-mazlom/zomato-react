import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@components/styledComponents/theme';
import CheckBox from '@components/checkbox/index';

describe('<Checkbox/>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <CheckBox checked={true} label={'Cuisine one'} onClick={() => {}} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
