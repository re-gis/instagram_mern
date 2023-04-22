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
import React, { useContext } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import MessageNoneOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import igLogo from "../../assets/igLogo.svg";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Stack } from "@mui/system";
import { Store } from "../Store";
import ProfileScreen from "../screens/ProfileScreen";

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
            <List disablePadding>
              <Link to={"/"}>
                <img
                  className="w-28 mt-3 mx-2 cursor-pointer"
                  src={igLogo}
                  alt=""
                />
              </Link>
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

              <Link to={"/search"}>
                <ListItem disablePadding className={linkClasses("search")}>
                  <ListItemButton>
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
              </Link>

              <Link to={"/explore"}>
                <ListItem disablePadding className={linkClasses("explore")}>
                  <ListItemButton>
                    <ListItemIcon>
                      <ExploreOutlinedIcon className={linkClasses("explore")} />
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

              <Link to={"/notifications"}>
                <ListItem
                  disablePadding
                  className={linkClasses("notifications")}
                >
                  <ListItemButton>
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
              </Link>

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
