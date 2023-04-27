import { Avatar, Typography } from '@mui/material';
import React from 'react'

const Notiz = () => {
  return (
    <>
      <div className="flex gap-3 py-3 px-5 items-center hover:bg-gray-100 cursor-pointer text-black">
        <Avatar style={{ width: "30px", height: "30px" }} />
        <Typography color={"black"} variant="span" className="text-xs">
          <span className="text-xs" style={{ fontWeight: 500 }}>
            This person{" "}
          </span>
          started following you.{" "}
          <span className="text-xs text-gray-500">5d</span>
        </Typography>

        <div>
          <button
            className="text-xs border-none hover:bg-gray-300 rounded-lg px-4 py-2 bg-gray-200"
            style={{ fontWeight: 500 }}
          >
            Following
          </button>
        </div>
      </div>
    </>
  );
}

export default Notiz
