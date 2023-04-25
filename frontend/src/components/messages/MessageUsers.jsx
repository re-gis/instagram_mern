import { Avatar, Typography } from '@mui/material';
import React from 'react'

const MessageUsers = () => {
  return (
    <>
      <div className="flex items-center gap-2 pl-4 pt-4 cursor-pointer">
        <Avatar className='hover:opacity-90' style={{ width: "35px", height: "35px" }} />
        <div className="flex flex-col">
          <Typography variant="span" style={{ fontSize: "11px" }}>
            Mugabo
          </Typography>
          <Typography
            variant="span"
            className="text-gray-500"
            style={{ fontSize: "9px" }}
          >
            Hello bro{" "}
            <span className="text-xs text-black" style={{ fontSize: "5px" }}>
              &#x2022;
            </span>{" "}
            1 h
          </Typography>
        </div>
      </div>
    </>
  );
}

export default MessageUsers
