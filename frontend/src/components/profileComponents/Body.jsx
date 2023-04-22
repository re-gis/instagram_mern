import { Box, Stack } from "@mui/material";
import React from "react";
import FooterTwo from "../FooterTwo";
import Profile from "./Profile";
import UserPosts from "./UserPosts";

const Body = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: '100vh' }}>
        <div style={{ flex: "0.9" }}>
          <Box
            marginLeft={"150px"}
            flexDirection="column"
            className="pl-14 items-center"
          >
            <Box width={"80%"}>
              <Profile />
            </Box>
            <Box width={'80%'}>
              <UserPosts />
            </Box>
          </Box>
        </div>
        <div style={{ flex: '0.1'}}>
          <FooterTwo />
        </div>
      </div>
    </>
  );
};

export default Body;
