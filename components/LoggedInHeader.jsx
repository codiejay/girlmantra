import * as Chakra from '@chakra-ui/react';
import React from 'react'; 

export const LoggedInHeader = ({logUserIn}) => { 

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
            justifyItems='flex-end'
          > 
            <Chakra.Link textAlign='center'>All Programs</Chakra.Link>
            <Chakra.Link textAlign='center'>All Guides</Chakra.Link>
            <Chakra.Avatar 
              textAlign='right'
              src='https://media.istockphoto.com/photos/photo-of-young-curly-girl-with-glasses-picture-id1271523795?b=1&k=20&m=1271523795&s=170667a&w=0&h=8evI9MSX28O5YwKlIBtumqtPUao-XxzB12RAuG8yF1g='
            >

          </Chakra.Avatar>
          </Chakra.Grid>
        </Chakra.Box>
      </Chakra.Flex>
    </Chakra.Box>
  )
}