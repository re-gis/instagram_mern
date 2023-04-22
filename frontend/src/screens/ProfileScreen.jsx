import { Box, Stack, styled } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../components/Feed';
import Menu from '../components/Menu'
import Body from '../components/profileComponents/Body';

const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const ProfileScreen = () => {
    const params = useParams()
    const {user} = params
  return (
    <>
      <div>
        <StyledStack spacing={5} flex={1} height='100vh'>
          <Box flex={0.2}>
            <Menu />
          </Box>
          <Box flex={0.8} height='100%'>
            <Body />
          </Box>
        </StyledStack>
      </div>
    </>
  );
}

export default ProfileScreen
