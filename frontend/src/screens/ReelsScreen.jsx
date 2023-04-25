import React, { useContext } from "react";
import { Store } from "../Store";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Menu from "../components/Menu";
import Reel from "../components/reels/Reel";

const ReelsScreen = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  if (!userInfo) {
    navigate("/login");
  }
  return (
    <>
      <Box display={"flex"} flexDirection={"row"}>
        <Box>
          <Menu />
        </Box>
        <Box
          flex={1}
          alignItems={"center"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Reel />
          <Reel />
          <Reel />
          <Reel />
          <Reel />
        </Box>
      </Box>
    </>
  );
};

export default ReelsScreen;
