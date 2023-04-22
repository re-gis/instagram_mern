import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <>
      <Stack style={{ marginTop: 'auto'}} >
        <Box
          display={"flex"}
          flexWrap="wrap"
          justifyContent={"center"}
          marginTop="100px"
        >
          <Link className="mr-2" to={"/meta"}>
            <Typography
              className="hover:underline text-gray-500"
              fontWeight={400}
              variant="span"
              style={{ fontSize: "8px" }}
            >
              &nbsp;Meta&nbsp;
            </Typography>
            <span style={{ color: "#ccc", fontSize: "5px" }}></span>
          </Link>
          <Link className="mr-2" to={"/about"}>
            <Typography
              className="hover:underline text-gray-500"
              fontWeight={400}
              variant="span"
              style={{ fontSize: "8px" }}
            >
              &nbsp;About&nbsp;
            </Typography>
            <span style={{ color: "#ccc", fontSize: "5px" }}></span>
          </Link>
          <Link className="mr-2" to={"/blog"}>
            <Typography
              className="hover:underline text-gray-500"
              fontWeight={400}
              variant="span"
              style={{ fontSize: "8px" }}
            >
              &nbsp;Blog&nbsp;
            </Typography>
            <span style={{ color: "#ccc", fontSize: "5px" }}></span>
          </Link>
          <Link className="mr-2" to={"/jobs"}>
            <Typography
              className="hover:underline text-gray-500"
              fontWeight={400}
              variant="span"
              style={{ fontSize: "8px" }}
            >
              &nbsp;Jobs&nbsp;
            </Typography>
            <span style={{ color: "#ccc", fontSize: "5px" }}></span>
          </Link>
          <Link className="mr-2" to={"/help"}>
            <Typography
              className="hover:underline text-gray-500"
              fontWeight={400}
              variant="span"
              style={{ fontSize: "8px" }}
            >
              &nbsp;Help&nbsp;
            </Typography>
            <span style={{ color: "#ccc", fontSize: "5px" }}></span>
          </Link>
          <Link className="mr-2" to={"/api"}>
            <Typography
              className="hover:underline text-gray-500"
              fontWeight={400}
              variant="span"
              style={{ fontSize: "8px" }}
            >
              &nbsp;API&nbsp;
            </Typography>
            <span style={{ color: "#ccc", fontSize: "5px" }}></span>
          </Link>
          <Link className="mr-2" to={"/privacy"}>
            <Typography
              className="hover:underline text-gray-500"
              fontWeight={400}
              variant="span"
              style={{ fontSize: "8px" }}
            >
              &nbsp;Privacy&nbsp;
            </Typography>
            <span style={{ color: "#ccc", fontSize: "5px" }}></span>
          </Link>
          <Link className="mr-2" to={"/terms"}>
            <Typography
              className="hover:underline text-gray-500"
              fontWeight={400}
              variant="span"
              style={{ fontSize: "8px" }}
            >
              &nbsp;Terms&nbsp;
            </Typography>
            <span style={{ color: "#ccc", fontSize: "5px" }}></span>
          </Link>
          <Link className="mr-2" to={"/topaccounts"}>
            <Typography
              className="hover:underline text-gray-500"
              fontWeight={400}
              variant="span"
              style={{ fontSize: "8px" }}
            >
              &nbsp;Top Accounts&nbsp;
            </Typography>
            <span style={{ color: "#ccc", fontSize: "5px" }}></span>
          </Link>
          <Link className="mr-2" to={"/locations"}>
            <Typography
              className="hover:underline text-gray-500"
              fontWeight={400}
              variant="span"
              style={{ fontSize: "8px" }}
            >
              &nbsp;Locations&nbsp;
            </Typography>
            <span style={{ color: "#ccc", fontSize: "5px" }}></span>
          </Link>
          <Link className="mr-2" to={"/igLite"}>
            <Typography
              className="hover:underline text-gray-500"
              fontWeight={400}
              variant="span"
              style={{ fontSize: "8px" }}
            >
              &nbsp;Instagram Lite&nbsp;
            </Typography>
          </Link>
          <Link className="mr-2" to={"/contactupload"}>
            <Typography
              className="hover:underline text-gray-500"
              fontWeight={400}
              variant="span"
              style={{ fontSize: "8px" }}
            >
              &nbsp;Contact Uploading & Non-Users&nbsp;
            </Typography>
          </Link>
          <Link className="mr-2" to={"/meta"}>
            <Typography
              className="hover:underline text-gray-500"
              fontWeight={400}
              variant="span"
              style={{ fontSize: "8px" }}
            >
              &nbsp;Meta Verified
            </Typography>
          </Link>
        </Box>

        <Box display={"flex"} justifyContent="center">
          <Typography variant="span">
            <select
              style={{ fontSize: "8px" }}
              className="outline-none cursor-pointer text-gray-500"
            >
              <option
                style={{ color: "black", fontSize: "9px" }}
                value="english"
              >
                English
              </option>
              <option style={{ color: "black", fontSize: "9px" }} value="kinya">
                Kinyarwanda
              </option>
              <option
                style={{ color: "black", fontSize: "9px" }}
                value="french"
              >
                French
              </option>
            </select>
            <span className="text-gray-500" style={{ fontSize: "8px" }}>
              &copy; 2023 Instagram from Meta
            </span>
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default FooterTwo;
