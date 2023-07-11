import { createTheme } from '@kuma-ui/core';

const theme = createTheme({
  breakpoints: {
    sm: '375px',
    md: '800px',
  },
});

type UserTheme = typeof theme;

declare module '@kuma-ui/core' {
  export interface Theme extends UserTheme {}
}

export default theme;
