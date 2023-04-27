import React, { useContext, useEffect, useState } from "react";
import { Avatar, Backdrop, Box, Checkbox, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import Form from "./Form";
import ProfileHeader from "./ProfileHeader";

const ProfileForm = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [fullname, setFullname] = useState(userInfo.fullname);
  const [username, setUsername] = useState(userInfo.username);
  const [number, setNumber] = useState(userInfo.number);
  const [email, setEmail] = useState(userInfo.email ? userInfo.email : '');
  const [website, setWebsite] = useState("Website");
  const [bio, setBio] = useState(userInfo.bio);
  const [gender, setGender] = useState(userInfo.gender ? userInfo.gender : 'Prefer Not To Say');
  const [profile, setProfile] = useState("");
  const [open, setOpen] = useState(false)

  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);


    
  return (
    <>
      {userInfo && (
        <>
          <Box
            display={"flex"}
            width={"100%"}
            flexDirection="column"
            gap={"10px"}
          >
            <Box className="flex flex-col items-stretch align-baseline">
              <ProfileHeader />
            </Box>

            <Box>
              <Form />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default ProfileForm;
