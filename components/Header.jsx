import * as Chakra from '@chakra-ui/react';
import React from 'react'; 

export const Header = ({logUserIn}) => { 

  return ( 
    <Chakra.Box borderBottom='2px solid #000' pb='15px' pt='18px'>
      <Chakra.Flex 
        gridTemplateColumns='20% 80%'
        alignItems='baseline'
        justifyItems='flex-end'
        justifyContent='space-between'
      >
        <Chakra.Text 
          letterSpacing='2px' 
          fontWeight='500'
          fontSize='19px'
        >
          Girlmantra
        </Chakra.Text>
        <Chakra.Box w='70%'>
        <Chakra.Grid 
          textAlign="right"
          gridTemplateColumns="1fr 1fr 1fr"
          alignItems='center'
          w='60%'
          m='0 0 auto auto'
          justifyItems='center'
        > 
          <Chakra.Link >Programs</Chakra.Link>
          <Chakra.Link >Sign up</Chakra.Link>
          <Chakra.Box 
            bg='linear-gradient(94.37deg, #12C2E9 9.06%, #C471ED 52.81%, #F64F59 92.1%)' 
            w='70%' 
            m='0 auto' 
            textAlign='right'
            p='0.2rem'
            borderRadius='29px'
          >
            <Chakra.Button 
              w='99%'
              borderRadius='19px'
              bg='black'
              color= 'white'
              _hover={{bg:'#000'}}
              _active={{bg:'#000', outline: 'none'}}
              _focus={{bg:'#000', outline: 'none'}}
              onClick={() => {
                logUserIn()
              }}
            >
              Log in
            </Chakra.Button>
          </Chakra.Box>
        </Chakra.Grid>
        </Chakra.Box>
      </Chakra.Flex>
    </Chakra.Box>
  )
}