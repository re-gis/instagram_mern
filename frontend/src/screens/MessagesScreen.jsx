import React, { useContext } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import Menu from "../components/Menu";
import { Store } from "../Store";
import MessageUsers from "../components/messages/MessageUsers";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const StyledButton = styled(Button)({
  width: '100px',
  height: '23px', 
  marginTop: '10px'
})


const MessagesScreen = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const navigate = useNavigate();

  if (!userInfo) {
    navigate("/login");
  }
  return (
    <>
      {userInfo && (
        <Box display={"flex"} flexDirection={"row"}>
          <Box flex={0.172}>
            <Menu />
          </Box>
          <Box
            flex={0.828}
            height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            className="bg-gray-50"
          >
            <div
              className="flex border bg-white mt-5"
              style={{ width: "65%", height: "80%" }}
            >
              <div style={{ flex: "0.35" }} className="border-r flex flex-col">
                <div style={{ flex: 0.1 }} className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 pl-24 cursor-pointer">
                      <div className="py-5">
                        <h1 style={{ fontWeight: 500, fontSize: "10.5px" }}>
                          {userInfo.username}
                        </h1>
                      </div>
                      <div className="py-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2.5"
                          stroke="currentColor"
                          class="w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="pr-6 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  style={{ flex: 0.9 }}
                  className="flex flex-col overflow-y-scroll"
                >
                  <MessageUsers />
                </div>
              </div>
              <div
                style={{
                  flex: "0.65",
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "auto",
                  alignItems: "stretch",
                  justifyContent: "flex-start",
                  position: "relative",
                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: "24px",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                    alignSelf: "auto",
                    position: "relative",
                    flexGrow: 0,
                    gap: "5px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="0.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                    className="border-black border-2 rounded-full w-24 h-24 p-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                  <Typography variant="span" style={{ fontWeight: 500 }}>
                    Your Messages
                  </Typography>
                  <Typography variant="span" style={{ fontSize: '9px' }} className="text-gray-500">
                    Send private photos and messages to a friend or group.
                  </Typography>
                  <StyledButton variant="contained" size="small">
                    <span
                      className="text-xs"
                      style={{ textTransform: "capitalize" }}
                    >
                      Send Message
                    </span>
                  </StyledButton>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      )}
    </>
  );
};

export default MessagesScreen;
