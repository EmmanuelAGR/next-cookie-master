import { ChangeEvent, useEffect, useState } from 'react';

import { GetServerSideProps } from 'next'

import { Card, CardContent, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Button } from '@mui/material';
import Cookies from 'js-cookie';

import { Layout } from '../components/layouts';
import axios from 'axios';

interface Props {
  theme: string;
  name: string;
}

const ThemeChangerPage = ( { theme, name }: Props ) => {
  console.log({theme, name});
  
  const [currentTheme, setCurrentTheme] = useState(theme);
  
  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;
    console.log({ selectedTheme });
    setCurrentTheme( selectedTheme );

    localStorage.setItem('theme', selectedTheme);
    Cookies.set('theme', selectedTheme);
  }

  const onClick = async() => {
    const { data } = await axios.get('/api/hello');

    console.log({ data });
  }

  useEffect(() => {
    console.log( 'LocalStorage:', localStorage.getItem('theme'));
    console.log( 'Cookies:', Cookies.get('theme'));

    
  }, []);
  
  
  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup
              row
              value={ currentTheme }
              onChange={ onThemeChange }
              sx={{ width: '90vw', justifyContent: 'space-around' }}
            >
              <FormControlLabel value='light' control={ <Radio /> } label="Light"/>
              <FormControlLabel value='dark' control={ <Radio /> } label="Dark"/>
              <FormControlLabel value='custom' control={ <Radio /> } label="Custom"/>
            </RadioGroup>
          </FormControl>

          <Button
            onClick={ onClick }
          >
            Solicitud
          </Button>
          
        </CardContent>
      </Card>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

  const { theme = 'light', name = 'No name' } = req.cookies;
  
  const validThemes = ['light', 'dark', 'custom'];

  return {
    props: {
      theme: validThemes.includes( theme ) ? theme : 'dark',
      name
    }
  }
}

export default ThemeChangerPage;
