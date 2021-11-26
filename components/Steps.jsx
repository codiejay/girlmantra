import React from 'react'; 
import * as Chakra from '@chakra-ui/react'; 
import {AiOutlineArrowRight, AiFillCheckCircle} from 'react-icons/ai'
import {IoMdCheckmark} from 'react-icons/io'

const Steps = ({ 
  closeSteps
}) => { 

  const [userNickName, setUsersNickName] = React.useState('');
  return ( 
    <Chakra.Box position='relative'>
      <Chakra.Grid h="100vh" gridTemplateColumns='1fr 1fr'>
      <Chakra.Box   
        bgImage="url('/girleating.png')" 
        bgSize='cover' 
        bgRepeat='no-repeat' 
        bgPosition='center' 
      />
      <Chakra.Box
        bg='#FCFDF3'
      >
        <Chakra.Box p='200px 60px'> 
          <Chakra.HStack alignItems='baseline'> 
            <Chakra.HStack color='#C8C5C5'> 
              <Chakra.Text>3</Chakra.Text>
              <AiOutlineArrowRight />
            </Chakra.HStack>
            <Chakra.Text fontSize='19px'>
              Hi, What’s your name?
              <Chakra.Text 
                fontSize='13px' 
                color='#555555'
                fontFamily="'Open Sans', sans-serif"
                mt='8px'
              >
              We can be on a first name basis.
            </Chakra.Text>
            </Chakra.Text>
          </Chakra.HStack>

          <form>
            <Chakra.FormControl mt='4rem'> 
              <Chakra.Input 
                placeholder='Type your name here'
                border='none'
                borderBottom='1px solid #000000'
                borderRadius='none'
                p='0'
                pb='9px'
                display='block'
                _focus={{
                  outline: 'none',
                  borderBottom:'1px solid #000000'
                }}
                _hover={{
                  borderBottom:'1px solid #000000'
                }}
                onChange={(event) => { 
                  setUsersNickName(event.target.value)
                }}
              />
            </Chakra.FormControl>
            
            <Chakra.Box 
            border='2px solid #FDDB2F' 
            m='4rem 0' 
            textAlign='left'
            p='0.2rem'
            borderRadius='7px'
            w='20%'
          >
            <Chakra.Button 
              disabled={!(!!userNickName)}
              textTransform='uppercase'
              rightIcon={<IoMdCheckmark />}
              w='99%'
              borderRadius='7px'
              bg='#FDDB2F'
              color= '#000'
              _hover={{bg:'#000', color: '#fff'}}
              _active={{bg:'#FDDB2F', outline: 'none'}}
              _focus={{bg:'#FDDB2F', outline: 'none'}}
              onClick={() => {
                closeSteps()
              }}
            >
              Ok
            </Chakra.Button>
          </Chakra.Box>
          </form>
        </Chakra.Box>
      </Chakra.Box>
      </Chakra.Grid>
      
      <Chakra.Box 
        w='70%'
        h='5px'
        bg='#FDDB2F' 
        position='absolute'
        top='0'
        left='0'
      />
      <Chakra.Link
        position='absolute'
        top='3%'
        right='3%'
        fontSize='15px'
        color='#555555'
        fontFamily="'Open Sans', sans-serif"
        onClick={() => {
          closeSteps()
        }}
      >
        skip for now
      </Chakra.Link>
    </Chakra.Box>
  )
}

export default Steps;