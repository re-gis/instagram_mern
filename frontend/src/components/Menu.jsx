import {
  Avatar,
  Badge,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import MessageNoneOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import igLogo from "../../assets/igLogo.svg";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Stack } from "@mui/system";

const StyledAvatar = styled(Avatar)({
  width: "20px",
  height: "20px",
  marginLeft: "26px",
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
  return (
    <>
      <Stack
        display={"flex"}
        className="border-r justify-between"
        flexDirection="column"
        position={"fixed"}
        width="220px"
        height={"100%"}
      >
        <Box>
          <List disablePadding>
            <Link to={'/home'}>
              <img
                className="w-28 mt-3 mx-2 cursor-pointer"
                src={igLogo}
                alt=""
              />
            </Link>
            <Link to={"/home"}>
              <ListItem disablePadding>
                <ListItemButton className="w-full">
                  <ListItemIcon className="pr-0">
                    <HomeIcon className="text-black  ml-9" />
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

            <Link to={"/search"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SearchIcon className="text-black  ml-9" />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: "10px",
                    }}
                    primary="Search"
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link to={"/explore"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ExploreOutlinedIcon className="text-black  ml-9" />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: "10px",
                    }}
                    primary="Explore"
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link to={"/reels"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <VideoLibraryOutlinedIcon className="text-black  ml-9" />
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
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BadgeStyle2 color="error" badgeContent={4} className="">
                      <MessageNoneOutlinedIcon className="text-black  ml-9" />
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

            <Link to={"/notifications"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BadgeStyle
                      badgeContent=""
                      overlap="circular"
                      variant="dot"
                      color="error"
                    >
                      <NotificationsNoneOutlinedIcon className="text-black  ml-9" />
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
            </Link>

            <Link to={"/create"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AddBoxOutlinedIcon className="text-black  ml-9" />
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

            <Link to={"/profile"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StyledAvatar />
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
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MenuOutlinedIcon className="text-black  ml-9" />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "10px",
                  }}
                  primary="More"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Stack>
    </>
  );
};

export default Menu;
