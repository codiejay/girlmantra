import React from 'react'; 
import * as Chakra from '@chakra-ui/react';


export const ChallengeCard = ({challengeDuration, challengeName}) => { 
  return ( 
    <Chakra.Box 
      bg="linear-gradient(180deg, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.35) 100%), url('/girlholdingcoffee.png')"
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      borderRadius='14px'
      color='#fff'
      display='flex'
      alignItems='center'
      justifyContent='center'
      position='relative'
    > 
      <Chakra.Box textAlign='center'>
        <Chakra.Text fontStyle='italic' fontWeight='500'>
          {challengeDuration} days challenge
        </Chakra.Text>
        <Chakra.Text m='0 auto' fontSize='1.6rem' w='50%'>
          {challengeName}
        </Chakra.Text>
        <Chakra.Box 
            bg='linear-gradient(94.37deg, #12C2E9 9.06%, #C471ED 52.81%, #F64F59 92.1%)' 
            w='70%' 
            m='3rem auto 0 auto' 
            textAlign='center'
            p='0.1rem'
            borderRadius='9px'
          >
            <Chakra.Button 
              w='99%'
              borderRadius='9px'
              bg='white'
              color= 'black'
              _hover={{bg:'#000', color: '#fff'}}
              _active={{bg:'#000', outline: 'none'}}
              _focus={{bg:'#000', outline: 'none'}}
              fontWeight='ligher'
            >
              Start
            </Chakra.Button>
          </Chakra.Box>

          <Chakra.Box 
            w='100px'
            borderRadius='90px'
            h='100px'
            bgPos='center'
            bgSize='cover'
            position='absolute'
            top='-8%'
            left='-8%'
            bg='linear-gradient(90.72deg, #D0F7FF 0%, #EECDFF 36.46%, #FFEFF0 100%)'
            display='flex' 
            alignItems='center' 
            justifyContent='center'
            transform='scale(0.7)' 
          > 
            <Chakra.VStack color='#000' spacing='2px' display='flex' alignItems='center' justifyContent='center'>
              <Chakra.Text>New</Chakra.Text>
              <Chakra.Text>New</Chakra.Text>
              <Chakra.Text>New</Chakra.Text>
            </Chakra.VStack>
          </Chakra.Box>
          <Chakra.Text position='absolute' bottom='2%' right='2%'> 
            12d 6h 20min
          </Chakra.Text>
      </Chakra.Box>
    </Chakra.Box>
  )
}