import { Box, Stack, styled } from "@mui/material";
import React from "react";
import FeedDown from "./FeedDown";
import RightBar from "./RightBar";
import Slider from "./Slider";

const Feed = () => {
  return (
    <Stack flexDirection="row" className="pl-14">
      <Box flex={0.6} width={"100%"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Box width={"100%"}>{/* <Slider /> */}</Box>

          <Box marginLeft={"20px"} width={"70%"}>
            <FeedDown />
          </Box>
        </Box>
      </Box>
      <Box flex={0.4} position={"relative"} width={"100%"}>
        <RightBar />
      </Box>
    </Stack>
  );
};

export default Feed;
