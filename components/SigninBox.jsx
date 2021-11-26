import React from 'react'
import * as Chakra from '@chakra-ui/react';
import {RiGoogleFill} from 'react-icons/ri'

const SigninBox = () => { 

  return ( 
    <Chakra.Box 
      p='40px 40px 100px 40px'
      bg='#fff'
      boxShadow= '0px 7px 23px rgba(0, 0, 0, 0.05)'
      borderRadius= '15px'
      textAlign='center'
      w='500px'
      position='absolute'
      left='35%'
      bottom='10%'
    > 
      <Chakra.Box>
        <Chakra.Text fontWeight='400' fontSize='27px' marginBottom='1rem' >Sign Up</Chakra.Text>
        <Chakra.Text fontWeight='400' fontSize='16px' fontFamily="'Open Sans', sans-serif">Enter your email to sign in</Chakra.Text>

        <Chakra.Box>
          <Chakra.Button 
            border='2.733333px solid #E2E8F0' 
            bg='none' 
            p='30px 20px' 
            fontSize='23px'
            _hover={{bg: '#FDDB2F'}}
            mt='3rem'
            _focus={{bg: '#FDDB2F', outline: 'none'}}
            _active={{bg: 'none', outline: 'none'}}
          >
              <RiGoogleFill />
          </Chakra.Button>
        </Chakra.Box>

        <form>
          <Chakra.FormControl id="Email" isRequired>
            <Chakra.FormLabel>Email</Chakra.FormLabel>
            <Chakra.Input 
              placeholder="Your Email" 
              fontFamily="'Open Sans', sans-serif"
              p='30px 11px'
              display='block'
              borderRadius='13px'
            />
          </Chakra.FormControl>

          <Chakra.FormControl  
            mt='1.4rem' id="Email" 
            display='flex' 
            alignItems='flex-end' 
          >
            <Chakra.Switch colorScheme='#FDDB2F' id="email-alerts" mr='10px' />
            <Chakra.Text fontFamily="'Open Sans', sans-serif">Remember me</Chakra.Text>
          </Chakra.FormControl>
          
          <Chakra.Button 
            bg='#FDDB2F' 
            color='#000'
            border='2px solid #FDDB2F'
            _hover={{bg: 'none'}}
            _focus={{bg: '#FDDB2F', outline: 'none'}}
            _active={{bg: '#FDDB2F', outline: 'none'}}
            p='32px'
            w='100%'
            mt='4rem'
            textTransform='uppercase'
          >
            Sign up
          </Chakra.Button>
        </form>
      </Chakra.Box>
    </Chakra.Box>
  )
}

export default SigninBox