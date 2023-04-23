import React from "react";
import { Stack } from "@mui/system";
import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProfileForm = () => {
  return (
    <>
      <Stack>
        <Box display={"flex"} flexDirection="column" gap={"10px"}>
          <Box display={"flex"} alignItems="center" gap={"10px"}>
            <Avatar />
            <div className="flex flex-col">
              <Typography variant="span">D Regis</Typography>
              <Link className="text-blue-400" to={"/profilePic"}>
                <Typography variant="span">Change profile picture</Typography>
              </Link>
            </div>
          </Box>

          <Box>
            <form className="flex flex-col">
              <div>
                <label
                  htmlFor="name"
                  style={{ fontSize: "10px", fontWeight: 500 }}
                >
                  Name
                </label>
                <div className="flex flex-col w-full gap-1">
                  <input
                    type="text"
                    disabled
                    value="D Regis"
                    className="cursor-not-allowed border rounded-sm text-sm px-2 py-1 bg-gray-100 text-gray-400"
                    name="name"
                  />
                  <Typography
                    variant="span"
                    style={{ fontSize: "8px" }}
                    className="text-gray-500"
                  >
                    You are using the same name on Instagram and Facebook. Go to
                    Facebook to change your name.
                    <Link to={"https://facebook.com"}>
                      <span
                        style={{ fontSize: "8px" }}
                        className="text-blue-400"
                      >
                        {" "}
                        Change Name
                      </span>
                    </Link>
                  </Typography>
                </div>
              </div>

              <div>
                <label
                  htmlFor="username"
                  style={{ fontSize: "10px", fontWeight: 500 }}
                >
                  Username
                </label>
                <div className="flex flex-col w-full gap-1">
                  <input
                    type="text"
                    value="D Regis"
                    className="border outline-none rounded-sm text-sm px-2 py-1 bg-gray-100"
                    name="username"
                  />
                  <Typography
                    variant="span"
                    style={{ fontSize: "8px" }}
                    className="text-gray-500"
                  >
                    In most cases, you'll be able to change your username back
                    to dregi_s250 for another 14 days.
                    <Link to={"https://facebook.com"}>
                      <span
                        style={{ fontSize: "8px" }}
                        className="text-blue-400"
                      >
                        {" "}
                        Learn more
                      </span>
                    </Link>
                  </Typography>
                </div>
              </div>

              <div>
                <label
                  htmlFor="website"
                  style={{ fontSize: "10px", fontWeight: 500 }}
                >
                  Website
                </label>
                <div className="flex flex-col w-full gap-1">
                  <input
                    type="text"
                    disabled
                    value="Website"
                    className="cursor-not-allowed border rounded-sm text-sm px-2 py-1 bg-gray-100 text-gray-400"
                    name="website"
                  />
                  <Typography
                    variant="span"
                    style={{ fontSize: "8px" }}
                    className="text-gray-500"
                  >
                    Editing your links is only available on mobile. Visit the
                    Instagram app and edit your profile to change the websites
                    in your bio.
                  </Typography>
                </div>
              </div>

              <div>
                <label
                  htmlFor="bio"
                  style={{ fontSize: "10px", fontWeight: 500 }}
                >
                  Bio
                </label>
                <div className="flex flex-col w-full gap-7">
                  <div className="flex flex-col">
                    <textarea
                      className="border w-full outline-none px-2 py-1"
                      style={{ height: "50px" }}
                      name="bio"
                    />
                    <span style={{ fontSize: "9px" }} className="text-gray-500">
                      0 / 150
                    </span>
                  </div>
                  <Typography
                    variant="span"
                    style={{ fontSize: "8px" }}
                    className="text-gray-500"
                  >
                    Personal information Provide your personal information, even
                    if the account is used for a business, a pet or something
                    else. This won't be a part of your public profile.
                  </Typography>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{ fontSize: "10px", fontWeight: 500 }}
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="outline-none border rounded-sm text-sm px-2 py-1"
                  placeholder="Email"
                />
              </div>

              <div>
                <label
                  htmlFor="number"
                  style={{ fontSize: "10px", fontWeight: 500 }}
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="number"
                  className="outline-none border rounded-sm text-sm px-2 py-1"
                  placeholder="Phone Number"
                  value={"+250786430853"}
                />
              </div>

              <div>
                <label
                  htmlFor="number"
                  style={{ fontSize: "10px", fontWeight: 500 }}
                >
                  Gender
                </label>
                <input
                  type="text"
                  name="number"
                  className="outline-none border rounded-sm text-sm px-2 py-1"
                  value={"Prefer not to say"}
                />
              </div>

              <div>
                <label
                  htmlFor="number"
                  style={{ fontSize: "10px", fontWeight: 500 }}
                >
                  Show account suggestions on profiles
                </label>
                <div>
                  <input
                    type="checkbox"
                    name="number"
                    className="outline-none"
                  />

                  <Typography style={{ fontSize: '9px', fontWeight: 500}} variant="span">
                    Choose whether people can see similar account suggestions on
                    your profile, and whether your account can be suggested on
                    other profiles.[?]
                  </Typography>
                </div>
              </div>

              <div>
                <button type="submit" style={{color: 'white', fontSize: '9px', fontWeight: 500}} className='bg-blue-500 hover:bg-blue-600 px-3 text-center py-1 rounded-lg'>Submit</button>
                <Typography style={{ fontSize: '9px', fontWeight: 500}} variant="span" className="text-blue-500 hover:text-blue-900 cursor-pointer">Temporary deactivate my account</Typography>
              </div>
            </form>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default ProfileForm;
