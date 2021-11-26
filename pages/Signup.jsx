import React from 'react';
import * as Chakra from '@chakra-ui/react';
import { Header } from '../components/Header';
import SigninBox from '../components/SigninBox';

const Signup = ({logUserIn}) => { 
  return ( 
    <Chakra.Box> 
      <Header 
        logUserIn={() => {
          logUserIn()
        }}
      />
      <Chakra.Grid
        gridTemplateColumns='1fr 1fr'
        h='100vh'
      > 
        <Chakra.Box position='relative'>
          <SigninBox />
        </Chakra.Box>
        <Chakra.Box  h='80%' bgImage="url('/girlwithsmile.png')" bgSize='cover' bgRepeat='no-repeat' bgPosition='center' />
      </Chakra.Grid>
    </Chakra.Box>
  )
}

export default Signup