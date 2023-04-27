import { Avatar, Typography } from "@mui/material";
import React from "react";
import Notiz from "./Notiz";

const Notifications = () => {
  return (
    <>
      <>
        <div className="h-full flex flex-col">
          <div className="w-full" style={{ flex: "0.06" }}>
            <Typography
              variant="h1"
              style={{ fontSize: "15px", fontWeight: 700 }}
              className="pl-5 pt-3"
            >
              Notifications
            </Typography>
          </div>

          <div style={{ flex: "0.94" }} className="border-t pb-2">
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
            <Notiz />
          </div>
        </div>
      </>
    </>
  );
};

export default Notifications;
