import '../styles/globals.css'
import { DefaultSeo } from 'next-seo';



import theme from "../theme";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/react";


function MyApp({ Component, pageProps }) {
  return( 
    <ThemeProvider theme={theme}>
      <ColorModeProvider options={{
        useSystsemColorMode: true
      }}>
        <CSSReset />
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: 'https://www.boostinglink.com/',
            site_name: 'Boost your links',
          }}
          // twitter={{
          //   handle: '@handle',
          //   site: '@site',
          //   cardType: 'summary_large_image',
          // }}
        />

        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>)
  
}

export default MyApp
