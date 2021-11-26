import * as Chk from '@chakra-ui/react';
import React from 'react' 
import {SiDiscord} from 'react-icons/si';

const FeaturedCommunity = ({
  communityName, 
  communityDesc, 
  discordLink,
  membersCount
}) => {
  return ( 
    <Chk.Box 
      border='1px solid #C8C5C5' 
      p='10% 4%'
      borderRadius='13px'
    >
      <Chk.HStack spacing='22px' mb='2rem'>
        <Chk.Box 
          bg="url('/girlholdingcoffee.png')"
          w='70px'
          h='70px'
          borderRadius='12px'
          bgPos='center'
          bgSize='cover'
        />
        <Chk.Text>{communityName}</Chk.Text>
      </Chk.HStack>

      <Chk.Text lineHeight='2' fontFamily="'Open Sans', sans-serif">
        {communityDesc}
      </Chk.Text>

      <Chk.HStack mt='3rem' alignItems='center' spacing='33px'>
        <Chk.Box> 
          <Chk.Flex alignItems='center' gridGap='4px'>
            <Chk.Box 
              bg='#36D029' 
              w='20px'
              h='20px' 
              borderRadius='100px'
            />
            <Chk.Text fontSize='11px'>
              {membersCount.toLocaleString()} People online
            </Chk.Text>
          </Chk.Flex>
        </Chk.Box>
        <Chk.Box 
          p='10px'
          bg='#FDDB2F'
          borderRadius='9px'
        > 
          <Chk.Link href={discordLink} fontSize='14px'>
            <Chk.HStack>
              <SiDiscord color='#4A69D6'/>
              <Chk.Text>Connect Discord</Chk.Text> 
            </Chk.HStack>
          </Chk.Link>
        </Chk.Box>
      </Chk.HStack>
    </Chk.Box>
  )
}

const News = ({ 
  title, 
  description
}) => {
  return ( 
    <Chk.Box 
      p='10% 4%'
      borderRadius='13px'
      bg='linear-gradient(90.72deg, #D0F7FF 0%, #EECDFF 36.46%, #FFEFF0 100%)'
    >
      <Chk.Text fontSize='15px' mb='0.8rem' >
        {title}
      </Chk.Text>
      <Chk.Text fontFamily="'Open Sans', sans-serif" fontSize='12px'>
        {description}
      </Chk.Text>
    </Chk.Box>  
  )
}


export const Feed = ({ 

}) => {
  
  return ( 
    <Chk.Box>
      <Chk.VStack>
        <FeaturedCommunity 
          discordLink='https://discord.gg/AzDGPYJjVw'
          communityDesc='Meet fellow participants and stay motivated together. Fitness, Diet, Mental Health -- find support groups for every lifestyle change.'
          communityName='Girlmantra Community'
          membersCount={1234}
        />
        <News 
          title='PCOS and Pregnancy a seminar with 
          Dr. Harriton'
          description='Meet fellow participants and stay motivated together. Fitness, Diet, Mental Health -- find support groups for every lifestyle change.'
        />
      </Chk.VStack>
    </Chk.Box>
  )
}