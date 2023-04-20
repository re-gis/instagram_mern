import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Stack>
      <Box display={"flex"} flexWrap="wrap">
        <Link to={"/about"}>
          <Typography
            className="hover:underline"
            fontWeight={400}
            variant="span"
            style={{ fontSize: "8px", color: "#ccc" }}
          >
            &nbsp;About&nbsp;
          </Typography>
          <span style={{ color: "#ccc", fontSize: "5px" }}>&#x2022;</span>
        </Link>
        <Link to={"/help"}>
          <Typography
            className="hover:underline"
            fontWeight={400}
            variant="span"
            style={{ fontSize: "8px", color: "#ccc" }}
          >
            &nbsp;Help&nbsp;
          </Typography>
          <span style={{ color: "#ccc", fontSize: "5px" }}>&#x2022;</span>
        </Link>
        <Link to={"/press"}>
          <Typography
            className="hover:underline"
            fontWeight={400}
            variant="span"
            style={{ fontSize: "8px", color: "#ccc" }}
          >
            &nbsp;Press&nbsp;
          </Typography>
          <span style={{ color: "#ccc", fontSize: "5px" }}>&#x2022;</span>
        </Link>
        <Link to={"/api"}>
          <Typography
            className="hover:underline"
            fontWeight={400}
            variant="span"
            style={{ fontSize: "8px", color: "#ccc" }}
          >
            &nbsp;API&nbsp;
          </Typography>
          <span style={{ color: "#ccc", fontSize: "5px" }}>&#x2022;</span>
        </Link>
        <Link to={"/jobs"}>
          <Typography
            className="hover:underline"
            fontWeight={400}
            variant="span"
            style={{ fontSize: "8px", color: "#ccc" }}
          >
            &nbsp;Jobs&nbsp;
          </Typography>
          <span style={{ color: "#ccc", fontSize: "5px" }}>&#x2022;</span>
        </Link>
        <Link to={"/privacy"}>
          <Typography
            className="hover:underline"
            fontWeight={400}
            variant="span"
            style={{ fontSize: "8px", color: "#ccc" }}
          >
            &nbsp;Privacy&nbsp;
          </Typography>
          <span style={{ color: "#ccc", fontSize: "5px" }}>&#x2022;</span>
        </Link>
        <Link to={"/terms"}>
          <Typography
            className="hover:underline"
            fontWeight={400}
            variant="span"
            style={{ fontSize: "8px", color: "#ccc" }}
          >
            &nbsp;Terms&nbsp;
          </Typography>
          <span style={{ color: "#ccc", fontSize: "5px" }}>&#x2022;</span>
        </Link>
        <Link to={"/locations"}>
          <Typography
            className="hover:underline"
            fontWeight={400}
            variant="span"
            style={{ fontSize: "8px", color: "#ccc" }}
          >
            &nbsp;Locations&nbsp;
          </Typography>
          <span style={{ color: "#ccc", fontSize: "5px" }}>&#x2022;</span>
        </Link>
        <Link to={"/language"}>
          <Typography
            className="hover:underline"
            fontWeight={400}
            variant="span"
            style={{ fontSize: "8px", color: "#ccc" }}
          >
            &nbsp;Language&nbsp;
          </Typography>
          <span style={{ color: "#ccc", fontSize: "5px" }}>&#x2022;</span>
        </Link>
        <Link to={"/meta"}>
          <Typography
            className="hover:underline"
            fontWeight={400}
            variant="span"
            style={{ fontSize: "8px", color: "#ccc" }}
          >
            &nbsp;Meta Verified
          </Typography>
        </Link>
      </Box>

      <Box marginTop={'20px'}>
        <Typography variant="span">
          <span style={{ color: '#ccc', fontSize: '8px'}}>&copy; 2023 INSTAGRAM FROM META</span>
        </Typography>
      </Box>
    </Stack>
  );
};

export default Footer;
