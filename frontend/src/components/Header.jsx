import { Avatar, Backdrop, Box, Checkbox, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/image1.jpg";
import { Store } from "../Store";

const Header = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginExisting = (e) => {
    e.preventDefault();
    dispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo")
    navigate('/login')
  };

  if (open) {
    return (
      <>
        <Header />
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "300px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
            }}
            className="rounded-lg"
          >
            <div className="border-b flex justify-end py-3">
              <h1
                className="text-black mr-28"
                style={{ fontSize: "12px", fontWeight: 500 }}
              >
                Switch accounts
              </h1>
              <span
                onClick={() => setOpen(false)}
                className="cursor-pointer mr-4 text-red-500"
                style={{ fontWeight: 500 }}
              >
                Close
              </span>
            </div>

            <div className="flex justify-between ml-3 my-3 cursor-pointer">
              <div className="flex items-center gap-3">
                <Avatar src={userInfo.photo} style={{ width: "30px", height: "30px" }} />
                <Typography
                  variant="span"
                  className="text-black"
                  style={{ fontSize: "9px", fontWeight: 500 }}
                >
                  {userInfo.username}
                </Typography>
              </div>
              <div>
                <Checkbox />
              </div>
            </div>
            <div className="border-t mt-40">
              <h1
                className="my-4 text-center text-blue-500 hover:text-blue-900 cursor-pointer"
                style={{ fontSize: "10px", fontWeight: 500 }}
                onClick={handleLoginExisting}
              >
                Log into an existing account
              </h1>
            </div>
          </div>
        </Backdrop>
      </>
    );
  }
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
              src={userInfo.photo}
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
              onClick={() => setOpen(true)}
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
