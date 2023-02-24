import { useState, useEffect } from 'react';

import type { AppContext, AppProps } from 'next/app';

import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import Cookies from 'js-cookie';

import { lightTheme, darkTheme, customTheme } from '@/styles/themes';
import '@/styles/globals.css';

interface Props extends AppProps {
  theme: string;
}

const App = ({ Component, pageProps, theme = 'dark' }: Props) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  
  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light';
    const selectedTheme: Theme = cookieTheme === 'light' 
      ? lightTheme 
      : (cookieTheme === 'dark') 
        ? darkTheme 
        : customTheme;
    setCurrentTheme( selectedTheme );
  }, [])
  
  return (
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

// App.getInitialProps = async( appContext: AppContext ) => {
//   const { theme } = appContext.ctx.req ? ( appContext.ctx.req as any).cookies : { theme: 'light' };
//   const validThemes = ['light', 'dark', 'custom'];

//   // console.log('getInitialProps', cookies);
  
//   return {
//     theme: validThemes.includes( theme ) ? theme : 'dark',
//   }
// }

export default App;
