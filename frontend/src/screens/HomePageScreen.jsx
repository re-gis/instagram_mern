import React, { useEffect, useState } from "react";
import { Box, Stack, styled } from "@mui/material";
import Menu from "../components/Menu";
import Feed from "../components/Feed";
import axios from "axios";

const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const HomePageScreen = () => {
  
  return (
    <>
      <div>
        <StyledStack spacing={5} flex={1}>
          <Box flex={0.2}>
            <Menu />
          </Box>
          <Box flex={0.8}>
            <Feed />
          </Box>
        </StyledStack>
      </div>
    </>
  );
};

export default HomePageScreen;
