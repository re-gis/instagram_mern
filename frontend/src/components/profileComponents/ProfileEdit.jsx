import styled from "@emotion/styled";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import meta from "../../../assets/metaLogo.svg";
import ListComponent from "../../screens/ListComponent";
import FooterTwo from "../FooterTwo";
import ProfileForm from "./ProfileForm";

const ProfileEdit = () => {
  return (
    <>
      <Stack>
        <Box
          border={"1px solid #ccc"}
          width="80%"
          display={"flex"}
          height="800px"
        >
          <Box flex={"0.25"} borderRight={"1px solid #ccc"}>
            <Box
              className="p-6"
              borderBottom={"1px solid #ccc"}
              height="26.29%"
              width={"100%"}
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
                  className="text-gray-900"
                >
                  Some account settings are moving
                </Typography>
              </div>

              <div className="pt-2">
                <span style={{ fontSize: "9px", lineHeight: "normal" }}>
                  Soon, Accounts Center will be the primary place to manage your
                  account info, settings and experiences across Meta
                  technologies like Facebook and Instagram.
                </span>
              </div>

              <div>
                <Typography variant="span">
                  <Link
                    to={"/more"}
                    className="text-blue-500"
                    style={{ fontSize: "10px" }}
                  >
                    Learn more
                  </Link>
                </Typography>
              </div>
            </Box>

            <Box borderBottom={"1px solid #ccc"} height="50.81%" width={"100%"}>
              <ListComponent font={500} title={"Edit profile"} />
              <ListComponent title={"Change password"} />
              <ListComponent title={"Apps and websites"} />
              <ListComponent title={"Email notifications"} />
              <ListComponent title={"Push notifications"} />
              <ListComponent title={"Manage contacts"} />
              <ListComponent title={"Privacy and security"} />
              <ListComponent title={"Ads"} />
              <ListComponent title={"Supervision"} />
              <ListComponent title={"Login activity"} />
              <ListComponent title={"Emails from Instagram"} />
              <ListComponent title={"Help"} />

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

          <Box>
            <ProfileForm />
          </Box>
        </Box>
        <FooterTwo />
      </Stack>
    </>
  );
};

export default ProfileEdit;
