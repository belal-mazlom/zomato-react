import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string,
    secondaryColor: string,
    txtColor: string,
    darkColor: string,
    grayColor: string,
    bgColor: string,
    secondaryBgColor: string,
    thirdBgColor: string,
    borderColor: string,
    white: string,
    black: string,
    red: string,
  }
}
