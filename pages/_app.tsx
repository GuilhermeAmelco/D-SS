import { GlobalStyle } from '@/styles/global';
import theme from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import {Fredoka, Montserrat, Playfair_Display} from 'next/font/google'


const fredoka = Fredoka({
  variable: '--fredoka',
  subsets: ['latin']
})
const montserrat = Montserrat({
  variable: '--montserrat',
  subsets: ['latin']
})

const playfair_Display= Playfair_Display({
  variable: '--playfair_Display',
  subsets: ['latin']
})


export default function App({ Component, pageProps }: AppProps) {

  return (

    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <div
        style={playfair_Display.style}
        className={`${playfair_Display.variable} ${montserrat.variable} ${fredoka.variable}`}
      >
           <Component {...pageProps} />
        </div> 
    </ThemeProvider>
  )
}
