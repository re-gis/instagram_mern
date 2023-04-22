import { Avatar, Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/image1.jpg";
import { Store } from "../Store";

const Header = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  return (
    <>
      {userInfo && (
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <div>
            <Link
              style={{ display: "flex", alignItems: "center" }}
              to={`/${userInfo.username}`}
            >
              <Avatar
                style={{ width: "35px", height: "35px" }}
                className="cursor-pointer"
              />
              <div className="flex flex-col ml-4 cursor-pointer">
                <Typography variant="p" fontSize={"9px"} fontWeight={500}>
                  {userInfo.username}
                </Typography>
                <Typography variant="span" fontSize={"9px"} color="#ccc">
                  {userInfo.fullname}
                </Typography>
              </div>
            </Link>
          </div>
          <div>
            <span
              className="text-blue-400 cursor-pointer"
              style={{ fontWeight: 500, fontSize: "9px" }}
            >
              Switch
            </span>
          </div>
        </Box>
      )}
    </>
  );
};

export default Header;
