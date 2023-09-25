import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  ListItemIcon,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import image from "../../assets/image1.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { Link } from "react-router-dom";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

const StyledCard = styled(Card)({
  height: "auto",
  width: "300px",
  marginLeft: "100px",
  borderRadius: "0px",

  "& .image": {
    height: "350px",
    objectFit: "cover",
    borderRadius: "3px",
    width: "300px",
  },
});

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "178px",
  marginBottom: "5px",
});

const FeedDown = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Stack
        display={"flex"}
        flexDirection="row"
        padding={"0px"}
        marginTop={"0px"}
      >
        <Box marginBottom={"0px"}>
          <StyledCard
            draggable="false"
            sx={{
              border: "none",
              boxShadow: "none",
              borderBottom: "1px solid #ccc",
            }}
          >
            <CardContent>
              <Box
                display={"flex"}
                justifyContent="space-between"
                marginBottom={"10px"}
                alignItems={"center"}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Avatar
                    className="cursor-pointer"
                    sx={{ bgcolor: "gray", width: "25px", height: "25px" }}
                    src={image}
                  ></Avatar>

                  <div>
                    <div>
                      <h1 className="text-sm" style={{ fontSize: "9px" }}>
                        <span
                          className="cursor-pointer"
                          style={{ fontSize: "9px", fontWeight: 500 }}
                        >
                          n.joliechristine{" "}
                        </span>
                        <strong style={{ fontSize: "9px" }}> &#x2022; </strong>{" "}
                        <span style={{ fontSize: "9px", color: "#ccc" }}>
                          3h
                        </span>
                      </h1>
                    </div>
                    <div>
                      <h1
                        className="cursor-pointer"
                        style={{ fontSize: "9px", color: "#ccc" }}
                      >
                        Original audio
                      </h1>
                    </div>
                  </div>
                </div>

                <MoreHorizIcon
                  className="cursor-pointer"
                  sx={{ color: "black", fontSize: "15px" }}
                />
              </Box>
              <CardMedia>
                <img className="image cursor-pointer" src={image} alt="" />
              </CardMedia>
              <Stack direction={"row"}>
                <StyledBox>
                  <Box>
                    <FavoriteBorderIcon className="mr-2 mt-2 cursor-pointer" />
                    <ChatBubbleOutlineOutlinedIcon className="mr-2 mt-2 cursor-pointer" />
                    <SendOutlinedIcon className="mr-2 mt-2 cursor-pointer" />
                  </Box>
                  <Box>
                    <BookmarkBorderOutlinedIcon className="cursor-pointer" />
                  </Box>
                </StyledBox>
              </Stack>
              <Typography fontSize={"8px"}>
                Liked by{" "}
                <span className="cursor-pointer" style={{ fontSize: "8px" }}>
                  <b style={{ fontSize: "8px" }}>D regis</b> and{" "}
                  <Link to={"/likes"}>
                    {" "}
                    <b style={{ fontSize: "8px" }}>30 others</b>
                  </Link>
                </span>
              </Typography>
              <Typography>
                <Link to={"/comments"}>
                  <span
                    style={{ fontSize: "8px", color: "#ccc" }}
                    className="cursor-pointer"
                  >
                    View 2 comments
                  </span>
                </Link>
              </Typography>

              <Stack
                direction={"row"}
                justifyContent="space-between"
                display={"flex"}
              >
                <form>
                  <div
                    className="border-none w-80 h-6"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginRight: "10px",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="outline-none w-full placeholder:text-gray-400 text-xs"
                    />
                    <button
                      onClick={handleClick}
                      className="border-none text-blue-500 bg-none"
                    >
                      <b>Post</b>
                    </button>
                  </div>
                </form>
                <ListItemIcon>
                  <EmojiEmotionsOutlinedIcon
                    className="cursor-pointer"
                    style={{ fontSize: "10px", marginTop: "4px" }}
                  />
                </ListItemIcon>
              </Stack>
            </CardContent>
          </StyledCard>
        </Box>
      </Stack>
    </>
  );
};

export default FeedDown;
