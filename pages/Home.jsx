import React from 'react';
import * as Chakra from '@chakra-ui/react';
import Steps from '../components/Steps';
import { LoggedInHeader } from '../components/LoggedInHeader';
import { Greeting } from '../components/Greeting';
import { ChallengeCard } from '../components/ChallengeCard';
import { AddChallengeBox } from '../components/AddChallengeBox';
import  {Feed}  from '../components/Feed';

const HomePage = () => { 
  const [showSteps, setShowsteps] = React.useState(true);
  return ( 
    <Chakra.Box>
      { 
        showSteps ? 
          <Steps 
            closeSteps={() => {
              setShowsteps(false)
            }}
          /> 
          : 
          <>
            <LoggedInHeader />
            <Chakra.Box 
              w='95%'
              m='0 auto'
            > 
              <Greeting />
              <Chakra.HStack mt='2rem'>
                <Chakra.Avatar 
                  src='http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/backhand-index-pointing-down-light-skin-tone.png'
                  w='30px'
                  h='30px'
                />
                <Chakra.Text>
                  Start your journey
                </Chakra.Text>
              </Chakra.HStack>

              <Chakra.Box mt='3rem'> 
                <Chakra.Grid h='550px' mb='4rem' gridTemplateColumns='repeat(3,1fr)' gap='2rem'>
                  <ChallengeCard 
                    challengeDuration={3}
                    challengeName='Softness of Flexibility'
                  />
                  <AddChallengeBox />
                  <Feed />
                </Chakra.Grid>
              </Chakra.Box>
            </Chakra.Box>
          </>
      }
    </Chakra.Box>
  )
}

export default HomePage