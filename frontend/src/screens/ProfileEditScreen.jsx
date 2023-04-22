import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';
import React from 'react'
import Menu from '../components/Menu';
import ProfileEdit from '../components/profileComponents/ProfileEdit';


const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const ProfileEditScreen = () => {
  return (
    <>
      <div>
        <StyledStack spacing={5} flex={1} height="100vh">
          <Box flex={0.2}>
            <Menu />
          </Box>
          <Box flex={0.8} height="100%">
            <ProfileEdit />
          </Box>
        </StyledStack>
      </div>
    </>
  );
}

export default ProfileEditScreen
