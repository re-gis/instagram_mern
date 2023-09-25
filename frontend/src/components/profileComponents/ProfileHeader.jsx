import React, { useContext, useEffect, useRef, useState } from "react";
import { Avatar, Backdrop, Box, Checkbox, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import Form from "./Form";
import { toast } from "react-toastify";
import { getError } from "../../utils";
import axios from "axios";

const ProfileHeader = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();

  const inputRef = useRef(null);

  const [open, setOpen] = useState(false);

  // const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const handleFileChange = async (e) => {
    try {
      const fileObj = e.target.files && e.target.files[0];
      if (!fileObj) {
        return;
      } else {
        const { data } = await axios.post(
          "/upload",
          {
            fileObj,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
              authorization: "Bearer " + userInfo.token,
            },
          }
        );
        dispatch({ type: "USER_SIGNOUT" });
        localStorage.removeItem("userInfo");
        navigate("/login");
        toast.success("Login to apply changes!");
        e.target.value = null;
      }
    } catch (error) {
      toast.error(getError(error));
      navigate(`/${userInfo.username}`);
    }
  };

  const handleProfileRemove = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "/profile/remove",
        {},
        {
          headers: {
            authorization: "Bearer " + userInfo.token,
          },
        }
      );

        dispatch({ type: "USER_SIGNOUT" });
        localStorage.removeItem("userInfo");
        navigate("/login");
        toast.success("Login to apply changes!");

    } catch (error) {
      toast.error(getError(error));
    }
  };

  if (open) {
    return (
      <>
        <input
          type="file"
          style={{ display: "none" }}
          ref={inputRef}
          onChange={handleFileChange}
        />
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
              className="border-b flex justify-center flex-col items-center cursor-pointer active:bg-gray-300"
              style={{ flex: "0.2" }}
              onClick={handleClick}
            >
              {/* <Link> */}
              <Typography
                style={{ fontSize: "9px", fontWeight: 500 }}
                className="text-blue-500 hover:text-blue-400"
              >
                Upload photo
              </Typography>
              {/* </Link> */}
            </div>

            <div
              className="border-b flex justify-center flex-col items-center active:bg-gray-300"
              style={{ flex: "0.2" }}
              onClick={handleProfileRemove}
            >
              {/* <Link> */}
              <Typography
                style={{ fontSize: "9px", fontWeight: 500 }}
                className="text-red-500 hover:text-red-400 cursor-pointer"
              >
                Remove Current Photo
              </Typography>
              {/* </Link> */}
            </div>
            <div
              className="flex justify-center cursor-pointer flex-col items-center active:bg-gray-300"
              style={{ flex: "0.2" }}
              onClick={() => setOpen(false)}
            >
              <Typography
                style={{ fontSize: "9px" }}
                className="text-black hover:text-gray-700"
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
