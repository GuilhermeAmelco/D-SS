import { GlobalStyle } from '@/styles/global';
import theme from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '../styles/main.css'

export default function App({ Component, pageProps }: AppProps) {

  return (

    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
