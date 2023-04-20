import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import image from "../../assets/image1.jpg";

const SuggestedPerson = () => {
  return (
    <Box marginBottom={'10px'}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className='cursor-pointer'
      >
        <div style={{ display: "flex", alignContent: "center" }}>
          <Avatar
            src={image}
            style={{ width: "25px", height: "25px", marginRight: "10px" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography fontSize={"9px"} variant="span" fontWeight={500}>
              D Regis
            </Typography>
            <Typography variant="span" fontSize={"9px"} color= '#ccc'>
              Followed by kevin, aime...
            </Typography>
          </div>
        </div>

        <div>
          <span
            className="text-blue-400 hover:text-blue-800"
            style={{ fontWeight: 500, fontSize: "9px" }}
          >
            Follow
          </span>
        </div>
      </div>
    </Box>
  );
};

export default SuggestedPerson;
