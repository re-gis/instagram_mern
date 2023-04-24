import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';
import React, { useContext } from 'react'
import Menu from '../components/Menu';
import ProfileEdit from '../components/profileComponents/ProfileEdit';
import { Store } from '../Store';


const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
});

const ProfileEditScreen = () => {
  const {state, dispatch} = useContext(Store)
  const {userInfo} = state
  return (
    <>
      <div>
        <StyledStack spacing={5} flex={1} height="100vh">
          <Box flex={0.2}>
            <Menu />
          </Box>
          <Box flex={0.6} height="100%">
            <ProfileEdit />
          </Box>
        </StyledStack>
      </div>
    </>
  );
}

export default ProfileEditScreen
