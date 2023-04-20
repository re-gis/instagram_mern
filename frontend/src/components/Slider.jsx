import { Box, Stack, styled } from "@mui/material";
import React, { useState } from "react";
import image from "../../assets/image1.jpg";

const StyledBox = styled(Box)({
  // display: "flex",
  // flexDirection: "row",
});

const Slider = () => {
  return (
    <>
      <Stack direction={'column'}>
        <StyledBox>
          {/* {names.map((name) => (
          <div key={name.name}>
            {name.name === "lorie"
            ? console.log("Hello")
            : console.log("Angela")}
          </div>
        ))} */}
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <img src={image} alt="" />
          </div>
        </StyledBox>
      </Stack>

      {/* <form onSubmit={loginFunction} action="#">
        <div>
        <input
        value={name}
        onChange={(e) => setName(e.target.value)}
            className="border my-3 bg-gray-300"
            type="text"
            placeholder="name"
          />
          {console.log(name)}
        </div>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border my-3 bg-gray-300"
            type="email"
            placeholder="email"
          />
          {console.log(email)}
        </div>
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border my-3 bg-gray-300"
            type="password"
            placeholder="password"
          />
          {console.log(password)}
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form> */}
    </>
  );
};

export default Slider;
