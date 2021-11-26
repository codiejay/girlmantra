import React from 'react'; 
import * as Chakra from '@chakra-ui/react'; 

export const Greeting = ({userName}) => { 
  return ( 
    <Chakra.Box
      p='3% 0'
      fontFamily="'Open Sans', sans-serif"
      color='#000'
      fontSize='1.2rem'
      fontWeight='500'
      borderBottom='1px solid #CCC8C8'
    > 
      { 
        !!userName ? 
        <Chakra.Text>Good Morning ,{userName}</Chakra.Text>
        : 
        <Chakra.Text>Good Morning</Chakra.Text>
      }
    </Chakra.Box>
  )
}