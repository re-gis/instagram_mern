import { Avatar, Typography } from "@mui/material";
import React from "react";

const Searches = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between hover:bg-gray-100">
        <div className="flex items-center flex-wrap gap-3 w-64 cursor-pointer">
          <Avatar
            style={{
              width: "30px",
              height: "30px",
              marginLeft: "15px",
            }}
          />
          <div>
            <Typography
              style={{ fontSize: "9px", fontWeight: 500 }}
              variant="span"
            >
              __king.liah
            </Typography>
            <div>
              <Typography
                variant="span"
                style={{ fontSize: "9px" }}
                className="text-gray-500"
              >
                God's daughter <span className="text-bold">&#x2022;</span>{" "}
                Followed by d...
              </Typography>
            </div>
          </div>
        </div>

        <div>
          <i className="fas fa-trash text-red-400 hover:text-red-500 cursor-pointer mr-9"></i>
        </div>
      </div>
    </>
  );
};

export default Searches;
