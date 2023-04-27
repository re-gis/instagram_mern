import React, { useContext, useEffect, useState } from "react";
import { Avatar, Backdrop, Box, Checkbox, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import Form from "./Form";

const ProfileHeader = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  if (open) {
    return (
      <>
        <Box className="flex flex-col items-stretch align-baseline">
          <ProfileHeader />
        </Box>
        <Form />
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
            <div
              className="border-b flex flex-col justify-center items-center"
              style={{ flex: "0.4" }}
            >
              <Avatar className="cursor-pointer" src={userInfo.photo} />
              <h1 className="text-black" style={{ fontSize: "13px" }}>
                Synced profile photo
              </h1>
              <h1 className="text-gray-500" style={{ fontSize: "9px" }}>
                Instagram, Facebook
              </h1>
            </div>

            <div
              className="border-b flex justify-center flex-col items-center active:bg-gray-300"
              style={{ flex: "0.2" }}
            >
              <Link>
                <Typography
                  style={{ fontSize: "9px", fontWeight: 500 }}
                  className="text-blue-500"
                >
                  Upload photo
                </Typography>
              </Link>
            </div>

            <div
              className="border-b flex justify-center flex-col items-center active:bg-gray-300"
              style={{ flex: "0.2" }}
            >
              <Link>
                <Typography
                  style={{ fontSize: "9px", fontWeight: 500 }}
                  className="text-red-500"
                >
                  Remove Current Photo
                </Typography>
              </Link>
            </div>
            <div
              className="flex justify-center flex-col items-center active:bg-gray-300"
              style={{ flex: "0.2" }}
              onClick={() => setOpen(false)}
            >
              <Typography
                style={{ fontSize: "9px" }}
                className="text-black cursor-pointer"
              >
                Cancel
              </Typography>
            </div>
          </div>
        </Backdrop>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          marginBottom: "16px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            paddingRight: "32px",
            textAlign: "right",
            flex: "0 0 194px",
            verticalAlign: "baseline",
            alignItems: "flex-end",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={userInfo.photo}
            style={{ width: "25px", height: "25px" }}
          />
        </div>
        <div className="flex flex-col">
          <Typography variant="span" style={{ fontSize: "10px" }}>
            {userInfo.username}
          </Typography>

          <Typography
            variant="span"
            style={{ fontSize: "9px", fontWeight: 500 }}
            className="text-blue-400 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            Change profile picture
          </Typography>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
