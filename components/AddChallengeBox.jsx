import * as Chk from '@chakra-ui/react';
import React from 'react'
import { IoIosAddCircle } from 'react-icons/io'; 


export const AddChallengeBox = () => {
  return ( 
    <Chk.Box 
      bg='FAF9F9'
      border='1px solid #C8C5C5' 
      borderRadius='11px'
      display='flex'
      alignItems='center'
      justifyContent='center'
      cursor='pointer'
    >
      <Chk.Box fontSize='44px' color='#C8C5C5'>
        <IoIosAddCircle />
      </Chk.Box>
    </Chk.Box>
  )
}