import { Box } from "@mui/system";
import React from "react";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledButton = styled(Button)({
  color: "black",
  fontSize: "8px",
  borderTop: "1px solid black",
  borderRadius: "0px",
  marginRight: "40px",
  width: "auto",

  "&:hover": {
    backgroundColor: 'white'
  }
});

const Navbar = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection="row"
        // alignItems={"center"}
        justifyContent={"center"}
        width='100%'
      >
        <StyledButton
          startIcon={
            <WindowOutlinedIcon
              style={{ fontSize: "10px", marginBottom: "2px" }}
            />
          }
          disableRipple={true}
        >
          POSTS
        </StyledButton>
        <StyledButton
          startIcon={
            <BookmarkBorderOutlinedIcon
              style={{ fontSize: "10px", marginBottom: "2px" }}
            />
          }
          disableRipple={true}
        >
          SAVED
        </StyledButton>
        <StyledButton
          startIcon={
            <PortraitOutlinedIcon
              style={{ fontSize: "10px", marginBottom: "2px" }}
            />
          }
          disableRipple={true}
        >
          TAGGED
        </StyledButton>
      </Box>
    </>
  );
};

export default Navbar;
