import { Box } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import image from "../../../assets/image1.jpg";

const UserPosts = () => {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box width="200px">
        <div style={{ display: 'flex', width: '100%'}}>
          <img className="mr-3 cursor-pointer" style={{ height: '190px', width: '190px', objectFit: 'cover'}} src={image} alt="" />
          <img className="mr-3 cursor-pointer" style={{ height: '190px', width: '190px', objectFit: 'cover'}} src={image} alt="" />
          <img className="mr-3 cursor-pointer" style={{ height: '190px', width: '190px', objectFit: 'cover'}} src={image} alt="" />
        </div>
      </Box>
    </>
  );
};

export default UserPosts;
