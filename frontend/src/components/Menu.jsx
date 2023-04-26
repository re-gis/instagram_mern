import {
  Avatar,
  Badge,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import React, { useContext, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import MessageNoneOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import igLogo from "../../assets/igLogo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, useLocation } from "react-router-dom";
import { Stack } from "@mui/system";
import { Store } from "../Store";
import Searches from "./drawer/Searches";

const StyledAvatar = styled(Avatar)({
  width: "20px",
  height: "20px",
  backgroundColor: "gray",
});

const BadgeStyle = styled(Badge)({
  "& .MuiBadge-badge": {
    width: 5,
    height: 7,
    borderRadius: "50%",
    backgroundColor: "lightred",
  },
});

const BadgeStyle2 = styled(Badge)({
  "& .MuiBadge-badge": {
    width: 15,
    height: 16,
    borderRadius: "50%",
    backgroundColor: "lightred",
  },
});

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [notiOpen, setNotiOpen] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const { pathname } = useLocation();
  let subPage = pathname.split("/")?.[1];

  if (subPage === "") {
    subPage = "home";
  }

  const linkClasses = (type = null) => {
    const isActive = pathname === "/" && type === "home";
    let classes = "text-black";

    if (type === subPage) {
      classes += " font-bold text-red-500";
    }

    return classes;
  };

  return (
    <>
      {open && (
        <>
          <Drawer open={open}>
            <Box
              className="w-96 flex h-full"
              style={{ borderTopRightRadius: "20px" }}
            >
              <Stack
                display={"flex"}
                className="border-r justify-between"
                flexDirection="column"
                width="15%"
                height={"100%"}
              >
                <Box>
                  <List disablePadding className="flex flex-col gap-4">
                    <Box className="mb-9 mt-3">
                      <Link to={"/"}>
                        <ListItem
                          disablePadding
                          className={linkClasses("home")}
                        >
                          <ListItemButton className="w-full">
                            <ListItemIcon className="pr-0">
                              <InstagramIcon
                                className={linkClasses("instagram")}
                              />
                            </ListItemIcon>
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    </Box>
                    <Link to={"/"}>
                      <ListItem disablePadding className={linkClasses("home")}>
                        <ListItemButton className="w-full">
                          <ListItemIcon className="pr-0">
                            <HomeIcon className={linkClasses("home")} />
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    </Link>

                    <ListItem disablePadding className={linkClasses("search")}>
                      <ListItemButton
                        onClick={() => {
                          setNotiOpen(false);
                          setOpen(!open);
                        }}
                      >
                        <ListItemIcon>
                          <SearchIcon className={linkClasses("search")} />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>

                    <Link to={"/reels"}>
                      <ListItem disablePadding className={linkClasses("reels")}>
                        <ListItemButton>
                          <ListItemIcon>
                            <VideoLibraryOutlinedIcon
                              className={linkClasses("reels")}
                            />
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    </Link>

                    <Link to={"/messages"}>
                      <ListItem
                        disablePadding
                        className={linkClasses("messages")}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <BadgeStyle2 color="error" badgeContent={4}>
                              <MessageNoneOutlinedIcon
                                className={linkClasses("messages")}
                              />
                            </BadgeStyle2>
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    </Link>

                    {/* <Link to={"/notifications"}> */}

                    <ListItem
                      disablePadding
                      className={linkClasses("notifications")}
                    >
                      <ListItemButton
                        onClick={() => {
                          setOpen(false);
                          setNotiOpen(!notiOpen);
                        }}
                      >
                        <ListItemIcon>
                          <BadgeStyle
                            badgeContent=""
                            overlap="circular"
                            variant="dot"
                            color="error"
                          >
                            <NotificationsNoneOutlinedIcon
                              className={linkClasses("notifications")}
                            />
                          </BadgeStyle>
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                    {/* </Link> */}

                    <Link to={"/create"}>
                      <ListItem
                        disablePadding
                        className={linkClasses("create")}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <AddBoxOutlinedIcon
                              className={linkClasses("create")}
                            />
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    </Link>

                    <Link to={`/${userInfo.username}`}>
                      <ListItem
                        disablePadding
                        className={linkClasses(`${userInfo.username}`)}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <StyledAvatar
                              src={userInfo.photo}
                              className={linkClasses(`${userInfo.fullname}`)}
                            />
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </List>
                </Box>

                <Box className="mb-8">
                  <List>
                    <Link to={"/more"}>
                      <ListItem disablePadding className={linkClasses("more")}>
                        <ListItemButton>
                          <ListItemIcon>
                            <MenuOutlinedIcon className={linkClasses("more")} />
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </List>
                </Box>
              </Stack>

              <Box display={"flex"} flexDirection={"column"} className="w-full">
                <Box flex={0.2} className="border-b">
                  <div className="py-6 px-5 flex flex-col gap-9">
                    <h1
                      style={{ fontSize: "15px", fontWeight: 500 }}
                      className="cursor-default"
                    >
                      Search
                    </h1>
                    <div className="border-none px-3 h-9 rounded-lg bg-gray-100">
                      <input
                        type="text"
                        className="outline-none placeholder:text-gray-400 w-full bg-gray-100 h-full rounded-lg"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </Box>
                <Box flex={0.8}>
                  <div>
                    <div
                      className="flex justify-between h-16 py-3 px-4 text-sm text-blue-400"
                      style={{ fontWeight: 500 }}
                    >
                      <h1 className="text-black">Recent</h1>
                      <h1 className="text-red-400 cursor-pointer hover:text-red-500 hover:underline">
                        Clear all
                      </h1>
                    </div>
                    <Searches />
                  </div>
                </Box>
              </Box>
            </Box>
          </Drawer>
        </>
      )}

      {notiOpen && (
        <>
          <Drawer open={notiOpen}>
            <Box
              className="w-96 flex h-full"
              style={{ borderTopRightRadius: "20px" }}
            >
              <Stack
                display={"flex"}
                className="border-r justify-between"
                flexDirection="column"
                width="15%"
                height={"100%"}
              >
                <Box>
                  <List disablePadding className="flex flex-col gap-4">
                    <Box className="mb-9 mt-3">
                      <Link to={"/"}>
                        <ListItem
                          disablePadding
                          className={linkClasses("home")}
                        >
                          <ListItemButton className="w-full">
                            <ListItemIcon className="pr-0">
                              <InstagramIcon
                                className={linkClasses("instagram")}
                              />
                            </ListItemIcon>
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    </Box>
                    <Link to={"/"}>
                      <ListItem disablePadding className={linkClasses("home")}>
                        <ListItemButton className="w-full">
                          <ListItemIcon className="pr-0">
                            <HomeIcon className={linkClasses("home")} />
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    </Link>

                    <ListItem disablePadding className={linkClasses("search")}>
                      <ListItemButton
                        onClick={() => {
                          setNotiOpen(false);
                          setOpen(!open);
                        }}
                      >
                        <ListItemIcon>
                          <SearchIcon className={linkClasses("search")} />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>

                    <Link to={"/reels"}>
                      <ListItem disablePadding className={linkClasses("reels")}>
                        <ListItemButton>
                          <ListItemIcon>
                            <VideoLibraryOutlinedIcon
                              className={linkClasses("reels")}
                            />
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    </Link>

                    <Link to={"/messages"}>
                      <ListItem
                        disablePadding
                        className={linkClasses("messages")}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <BadgeStyle2 color="error" badgeContent={4}>
                              <MessageNoneOutlinedIcon
                                className={linkClasses("messages")}
                              />
                            </BadgeStyle2>
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    </Link>

                    <ListItem
                      disablePadding
                      className={linkClasses("notifications")}
                    >
                      <ListItemButton
                        onClick={() => {
                          setOpen(false);
                          setNotiOpen(!notiOpen);
                        }}
                      >
                        <ListItemIcon>
                          <BadgeStyle
                            badgeContent=""
                            overlap="circular"
                            variant="dot"
                            color="error"
                          >
                            <NotificationsNoneOutlinedIcon
                              className={linkClasses("notifications")}
                            />
                          </BadgeStyle>
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>

                    <Link to={"/create"}>
                      <ListItem
                        disablePadding
                        className={linkClasses("create")}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <AddBoxOutlinedIcon
                              className={linkClasses("create")}
                            />
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    </Link>

                    <Link to={`/${userInfo.username}`}>
                      <ListItem
                        disablePadding
                        className={linkClasses(`${userInfo.username}`)}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <StyledAvatar
                              src={userInfo.photo}
                              className={linkClasses(`${userInfo.fullname}`)}
                            />
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </List>
                </Box>

                <Box className="mb-8">
                  <List>
                    <Link to={"/more"}>
                      <ListItem disablePadding className={linkClasses("more")}>
                        <ListItemButton>
                          <ListItemIcon>
                            <MenuOutlinedIcon className={linkClasses("more")} />
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </List>
                </Box>
              </Stack>

             
            </Box>
          </Drawer>
        </>
      )}
      {userInfo && (
        <Stack
          display={"flex"}
          className="border-r justify-between"
          flexDirection="column"
          position={"fixed"}
          width="220px"
          height={"100%"}
        >
          <Box>
            <List disablePadding className="flex flex-col gap-3">
              <Box className="mb-9 mt-3">
                <Link to={"/"}>
                  <img
                    className="w-28 mt-3 mx-2 cursor-pointer"
                    src={igLogo}
                    alt=""
                  />
                </Link>
              </Box>
              <Link to={"/"}>
                <ListItem disablePadding className={linkClasses("home")}>
                  <ListItemButton className="w-full">
                    <ListItemIcon className="pr-0">
                      <HomeIcon className={linkClasses("home")} />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                      primary="Home"
                    />
                  </ListItemButton>
                </ListItem>
              </Link>

              <ListItem disablePadding className={linkClasses("search")}>
                <ListItemButton
                  onClick={() => {
                    setNotiOpen(false);
                    setOpen(!open);
                  }}
                >
                  <ListItemIcon>
                    <SearchIcon className={linkClasses("search")} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: "10px",
                    }}
                    primary="Search"
                  />
                </ListItemButton>
              </ListItem>

              <Link to={"/reels"}>
                <ListItem disablePadding className={linkClasses("reels")}>
                  <ListItemButton>
                    <ListItemIcon>
                      <VideoLibraryOutlinedIcon
                        className={linkClasses("reels")}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: "10px",
                      }}
                      primary="Reels"
                    />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={"/messages"}>
                <ListItem disablePadding className={linkClasses("messages")}>
                  <ListItemButton>
                    <ListItemIcon>
                      <BadgeStyle2 color="error" badgeContent={4}>
                        <MessageNoneOutlinedIcon
                          className={linkClasses("messages")}
                        />
                      </BadgeStyle2>
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: "10px",
                      }}
                      primary="Messages"
                    />
                  </ListItemButton>
                </ListItem>
              </Link>

              <ListItem disablePadding className={linkClasses("notifications")}>
                <ListItemButton
                  onClick={() => {
                    setOpen(false);
                    setNotiOpen(!notiOpen);
                  }}
                >
                  <ListItemIcon>
                    <BadgeStyle
                      badgeContent=""
                      overlap="circular"
                      variant="dot"
                      color="error"
                    >
                      <NotificationsNoneOutlinedIcon
                        className={linkClasses("notifications")}
                      />
                    </BadgeStyle>
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: "10px",
                    }}
                    primary="Notifications"
                  />
                </ListItemButton>
              </ListItem>

              <Link to={"/create"}>
                <ListItem disablePadding className={linkClasses("create")}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddBoxOutlinedIcon className={linkClasses("create")} />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: "10px",
                      }}
                      primary="Create"
                    />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to={`/${userInfo.username}`}>
                <ListItem
                  disablePadding
                  className={linkClasses(`${userInfo.username}`)}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <StyledAvatar
                        src={userInfo.photo}
                        className={linkClasses(`${userInfo.fullname}`)}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: "10px",
                      }}
                      primary="Profile"
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Box>

          <Box className="mb-8">
            <List>
              <Link to={"/more"}>
                <ListItem disablePadding className={linkClasses("more")}>
                  <ListItemButton>
                    <ListItemIcon>
                      <MenuOutlinedIcon className={linkClasses("more")} />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: "10px",
                      }}
                      primary="More"
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Box>
        </Stack>
      )}
    </>
  );
};

export default Menu;
