import { Box, ChakraProvider } from '@chakra-ui/react'
import customTheme from '../theme';
import type { AppProps } from 'next/app';
import MobileNavigation from "../components/MobileNavigation";

import Header from '../components/Header';

function App({ Component, pageProps }: AppProps) {
  return (
    <> 
      <ChakraProvider theme={customTheme}>
        <Header />
        <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
          <Component {...pageProps} />
        </Box>
        <MobileNavigation />
      </ChakraProvider>
    </>
  )
}
export default App
