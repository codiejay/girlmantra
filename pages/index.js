import * as Chakra from '@chakra-ui/react';
import React from 'react';
import HomePage from './Home';
import Signup from './Signup';
import Head  from 'next/head';
import { Footer } from '../components/Footer';

export default function Home() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <Chakra.Box  w='100%' m='0 auto' fontFamily='Roboto Mono'>
      <Chakra.Box w='90%' m='0 auto'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&family=Roboto+Mono:ital,wght@0,100;0,300;0,400;0,500;1,100&display=swap" rel="stylesheet" />
      </Head>
      { 
        !loggedIn ? 
          <Signup
            logUserIn={() => {
              setLoggedIn(true)
            }}
          /> 
          : 
          <> 
            <HomePage />
          </>
      }
      </Chakra.Box> 
      <Footer />
    </Chakra.Box>
  )
}
