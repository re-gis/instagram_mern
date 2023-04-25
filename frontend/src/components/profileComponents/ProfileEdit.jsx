import styled from "@emotion/styled";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import meta from "../../../assets/metaLogo.svg";
import ListComponent from "../../screens/ListComponent";
import FooterTwo from "../FooterTwo";
import ProfileForm from "./ProfileForm";
import { Store } from "../../Store";

const StyledBox = styled(Box)({
  width: "65%",
  alignItems: "stretch",
  // flex:'1 1 400px',
  minWidth: "50px",
  position: "relative",
  verticalAlign: "baseline",
  marginTop: "20px",
});

const ProfileEdit = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;


  const navigate = useNavigate()
useEffect(() => {

  if(!userInfo) {
    navigate('/login')
  }
}, [navigate, userInfo])
  return (
    <>
      {userInfo && (
        <>
          <Box
            border={"1px solid #ccc"}
            width="80%"
            display={"flex"}
            height="800px"
            marginLeft={"190px"}
          >
            <Box width={"25%"} borderRight={"1px solid #ccc"}>
              <Box
                className="p-6"
                borderBottom={"1px solid #ccc"}
                height="27.29%"
                width={"100%"}
              >
                <div className="flex items-center gap-1">
                  <img style={{ width: "15px" }} src={meta} alt="" />
                  <Typography style={{ fontWeight: 500 }} variant="span">
                    Meta
                  </Typography>
                </div>

                <div style={{ display: "flex" }}>
                  <Typography
                    variant="h4"
                    style={{ fontSize: "11px", fontWeight: 500 }}
                    className="text-gray-900"
                  >
                    Some account settings are moving
                  </Typography>
                </div>

                <div className="pt-2">
                  <span style={{ fontSize: "9px", lineHeight: "normal" }}>
                    Soon, Accounts Center will be the primary place to manage
                    your account info, settings and experiences across Meta
                    technologies like Facebook and Instagram.
                  </span>
                </div>

                <div>
                  <Typography variant="span">
                    <Link
                      to={"/profile/more"}
                      className="text-blue-500"
                      style={{ fontSize: "10px" }}
                    >
                      Learn more
                    </Link>
                  </Typography>
                </div>
              </Box>

              <Box
                borderBottom={"1px solid #ccc"}
                height="49.81%"
                width={"100%"}
              >
                <ListComponent font={500} title={"Edit profile"} path="" />
                <ListComponent title={"Change password"} path="edit/password" />
                <ListComponent title={"Apps and websites"} path="edit/apps" />
                <ListComponent
                  title={"Email notifications"}
                  path="edit/emailnotifications"
                />
                <ListComponent
                  title={"Push notifications"}
                  path="edit/pushnotifications"
                />
                <ListComponent title={"Manage contacts"} path="edit/contacts" />
                <ListComponent
                  title={"Privacy and security"}
                  path="edit/privacy"
                />
                <ListComponent title={"Ads"} path="adds" />
                <ListComponent title={"Supervision"} path="supervision" />
                <ListComponent title={"Login activity"} path="loginActivity" />
                <ListComponent
                  title={"Emails from Instagram"}
                  path="igEmails"
                />
                <ListComponent title={"Help"} path="edit/help" />

                <ListItem>
                  <Typography variant="span">
                    <Link
                      to={"/accounts/edit/proAccount"}
                      className="text-blue-500"
                      style={{ fontSize: "8.5px", fontWeight: 500 }}
                    >
                      Switch to professional account
                    </Link>
                  </Typography>
                </ListItem>
              </Box>

              <Box
                borderBottom={"1px solid #ccc"}
                height="22.95%"
                width={"100%"}
                className="p-6 cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  <img style={{ width: "15px" }} src={meta} alt="" />
                  <Typography style={{ fontWeight: 500 }} variant="span">
                    Meta
                  </Typography>
                </div>

                <div>
                  <Typography
                    variant="h4"
                    style={{ fontSize: "11px", fontWeight: 500 }}
                    className="text-blue-500"
                  >
                    Accounts Center
                  </Typography>
                </div>

                <div className="pt-2">
                  <span
                    className="text-gray-500"
                    style={{ fontSize: "9px", lineHeight: "normal" }}
                  >
                    Control settings for connected experiences across Instagram,
                    the Facebook app and Messenger, including story and post
                    sharing and logging in.
                  </span>
                </div>
              </Box>
            </Box>

            <StyledBox>
              <ProfileForm />
            </StyledBox>
          </Box>
          <div style={{ marginLeft: "195px" }}>
            <FooterTwo />
          </div>
        </>
      )}
    </>
  );
};

export default ProfileEdit;
