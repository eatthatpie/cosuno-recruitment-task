import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string
      gray: string
      muted: string
      navy: string
      primary: string
      white: string
    },
    typo: {
      lineHeights: {
        regular: string
      },
      fontSizes: {
        regular: string
      },
      fontWeights: {
        regular: number,
        bold: number,
        black: number
      }
    }
  }
}
