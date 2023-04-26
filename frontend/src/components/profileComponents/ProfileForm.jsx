import React, { useContext, useEffect, useState } from "react";
import { Stack } from "@mui/system";
import { Avatar, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../Store";

const ProfileForm = () => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const [fullname, setFullname] = useState(userInfo.fullname)
  const [username, setUsername] = useState(userInfo.username)
  const [number, setNumber] = useState(userInfo.number)
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('Website')
  const [bio, setBio] = useState('')
  const [gender, setGender] = useState('Prefer not to say')
  const [profile, setProfile] = useState('')

  const navigate = useNavigate()
useEffect(() => {

  if(!userInfo) {
    navigate('/login')
  }
}, [navigate, userInfo])
  return (
    <>
      {userInfo && (
        <>
          <Box
            display={"flex"}
            width={"100%"}
            flexDirection="column"
            gap={"10px"}
          >
            <Box className="flex flex-col items-stretch align-baseline">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  marginBottom: "16px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    paddingRight: "32px",
                    textAlign: "right",
                    flex: "0 0 194px",
                    verticalAlign: "baseline",
                    alignItems: "flex-end",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Avatar src={userInfo.photo} style={{ width: "25px", height: "25px" }} />
                </div>
                <div className="flex flex-col">
                  <Typography variant="span" style={{ fontSize: "10px" }}>
                    {userInfo.username}
                  </Typography>
                  <Link
                    className="text-blue-400"
                    to={"/profile/change/profilePic"}
                  >
                    <Typography
                      variant="span"
                      style={{ fontSize: "9px", fontWeight: 500 }}
                    >
                      Change profile picture
                    </Typography>
                  </Link>
                </div>
              </div>
            </Box>

            <Box>
              <form
                className="flex flex-col"
                style={{ alignItems: "stretch", verticalAlign: "baseline" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "block",
                      paddingLeft: "32px",
                      paddingRight: "32px",
                      textAlign: "right",
                      flex: "0 0 194px",
                    }}
                  >
                    <label
                      htmlFor="name"
                      style={{
                        fontSize: "10px",
                        fontWeight: 500,
                        verticalAlign: "baseline",
                      }}
                    >
                      Name
                    </label>
                  </div>
                  <div
                    className="flex flex-col"
                    style={{
                      alignItems: "stretch",
                      flexGrow: 1,
                      // flexShrink: 0,
                      verticalAlign: "baseline",
                      justifyContent: "flex-start",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "355px",
                        width: "100%",
                        overflowY: "visible",
                        display: "inline-block",
                        flexShrink: 0,
                        overflowX: "visible",
                        alignSelf: "auto",
                        position: "relative",
                        flexGrow: 0,
                      }}
                    >
                      <input
                        type="text"
                        disabled
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        className="cursor-not-allowed w-full border rounded-sm text-sm px-2 py-1 bg-gray-100 text-gray-400"
                        name="name"
                      />
                      <div
                        style={{
                          maxWidth: "355px",
                          width: "100%",
                          overflowY: "visible",
                          display: "flex",
                          flexDirection: "column",
                          overflowX: "visible",
                          position: "relative",
                          alignItems: "stretch",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Typography
                          variant="span"
                          style={{ fontSize: "8px", display: "block" }}
                          className="text-gray-500"
                        >
                          You are using the same name on Instagram and Facebook.
                          Go to Facebook to change your name.
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
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "block",
                      paddingLeft: "32px",
                      paddingRight: "32px",
                      textAlign: "right",
                      flex: "0 0 194px",
                    }}
                  >
                    <label
                      htmlFor="username"
                      style={{
                        fontSize: "10px",
                        fontWeight: 500,
                        verticalAlign: "baseline",
                      }}
                    >
                      Username
                    </label>
                  </div>
                  <div
                    className="flex flex-col"
                    style={{
                      alignItems: "stretch",
                      flexGrow: 1,
                      // flexShrink: 0,
                      verticalAlign: "baseline",
                      justifyContent: "flex-start",
                      position: "relative",
                    }}
                  >
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="border outline-none rounded-sm text-sm px-2 py-1 bg-gray-100"
                      name="username"
                    />
                    <div
                      style={{
                        maxWidth: "355px",
                        width: "100%",
                        overflowY: "visible",
                        display: "flex",
                        flexDirection: "column",
                        overflowX: "visible",
                        position: "relative",
                        alignItems: "stretch",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Typography
                        variant="span"
                        style={{ fontSize: "8px" }}
                        className="text-gray-500"
                      >
                        In most cases, you'll be able to change your username
                        back to {userInfo.username} for another 14 days.
                        <Link to={"/profile/change/name"}>
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
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "block",
                      paddingLeft: "32px",
                      paddingRight: "32px",
                      textAlign: "right",
                      flex: "0 0 194px",
                    }}
                  >
                    <label
                      htmlFor="website"
                      style={{ fontSize: "10px", fontWeight: 500 }}
                    >
                      Website
                    </label>
                  </div>
                  <div
                    className="flex flex-col"
                    style={{
                      alignItems: "stretch",
                      flexGrow: 1,
                      // flexShrink: 0,
                      verticalAlign: "baseline",
                      justifyContent: "flex-start",
                      position: "relative",
                    }}
                  >
                    <input
                      type="text"
                      disabled
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="cursor-not-allowed border rounded-sm text-sm px-2 py-1 bg-gray-100 text-gray-400"
                      name="website"
                    />
                    <div
                      style={{
                        maxWidth: "355px",
                        width: "100%",
                        overflowY: "visible",
                        display: "flex",
                        flexDirection: "column",
                        overflowX: "visible",
                        position: "relative",
                        alignItems: "stretch",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Typography
                        variant="span"
                        style={{ fontSize: "8px" }}
                        className="text-gray-500 block"
                      >
                        Editing your links is only available on mobile. Visit
                        the Instagram app and edit your profile to change the
                        websites in your bio.
                      </Typography>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "block",
                      paddingLeft: "32px",
                      paddingRight: "32px",
                      textAlign: "right",
                      flex: "0 0 194px",
                    }}
                  >
                    <label
                      htmlFor="bio"
                      style={{
                        fontSize: "10px",
                        fontWeight: 500,
                        verticalAlign: "baseline",
                      }}
                    >
                      Bio
                    </label>
                  </div>
                  <div
                    className="flex flex-col"
                    style={{
                      alignItems: "stretch",
                      flexGrow: 1,
                      // flexShrink: 0,
                      verticalAlign: "baseline",
                      justifyContent: "flex-start",
                      position: "relative",
                    }}
                  >
                    <div className="flex flex-col text-left">
                      <textarea
                        className="border w-full outline-none px-2 py-1"
                        style={{ height: "50px" }}
                        name="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                      />
                      <span
                        style={{ fontSize: "9px" }}
                        className="text-gray-500"
                      >
                        0 / 150
                      </span>
                    </div>
                    <div
                      style={{
                        maxWidth: "355px",
                        width: "100%",
                        overflowY: "visible",
                        display: "flex",
                        flexDirection: "column",
                        overflowX: "visible",
                        position: "relative",
                        alignItems: "stretch",
                        justifyContent: "flex-start",
                        textAlign: "left",
                        marginTop: "15px",
                      }}
                    >
                      <Typography
                        variant="span"
                        style={{
                          fontSize: "8px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                        className="text-gray-500"
                      >
                        <span style={{ fontWeight: 500, fontSize: "9px" }}>
                          Personal information
                        </span>{" "}
                        Provide your personal information, even if the account
                        is used for a business, a pet or something else. This
                        won't be a part of your public profile.
                      </Typography>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "block",
                      paddingLeft: "32px",
                      paddingRight: "32px",
                      textAlign: "right",
                      flex: "0 0 194px",
                    }}
                  >
                    <label
                      htmlFor="email"
                      style={{ fontSize: "10px", fontWeight: 500 }}
                    >
                      Email
                    </label>
                  </div>
                  <div
                    className="flex flex-col"
                    style={{
                      alignItems: "stretch",
                      flexGrow: 1,
                      // flexShrink: 0,
                      verticalAlign: "baseline",
                      justifyContent: "flex-start",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "355px",
                        width: "100%",
                        overflowY: "visible",
                        display: "inline-block",
                        flexShrink: 0,
                        overflowX: "visible",
                        alignSelf: "auto",
                        position: "relative",
                        flexGrow: 0,
                      }}
                    >
                      <input
                        type="text"
                        name="email"
                        className="outline-none w-full border rounded-sm text-sm px-2 py-1"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "block",
                      paddingLeft: "32px",
                      paddingRight: "32px",
                      textAlign: "right",
                      flex: "0 0 194px",
                    }}
                  >
                    <label
                      htmlFor="number"
                      style={{ fontSize: "10px", fontWeight: 500 }}
                    >
                      Phone Number
                    </label>
                  </div>
                  <div
                    className="flex flex-col"
                    style={{
                      alignItems: "stretch",
                      flexGrow: 1,
                      // flexShrink: 0,
                      verticalAlign: "baseline",
                      justifyContent: "flex-start",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "355px",
                        width: "100%",
                        overflowY: "visible",
                        display: "inline-block",
                        flexShrink: 0,
                        overflowX: "visible",
                        alignSelf: "auto",
                        position: "relative",
                        flexGrow: 0,
                      }}
                    >
                      <input
                        type="text"
                        name="number"
                        className="outline-none w-full border rounded-sm text-sm px-2 py-1"
                        placeholder="Phone Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      paddingLeft: "100px",
                      paddingRight: "38px",
                    }}
                  >
                    <div
                      style={{
                        width: "130px",
                        height: "25px",
                        textAlign: "center",
                      }}
                      className="border rounded-lg bg-blue-500 hover:bg-blue-600"
                    >
                      <Typography
                        fontSize={"9px"}
                        fontWeight={500}
                        color={"white"}
                        variant="span"
                      >
                        Confirm phone number
                      </Typography>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "block",
                      paddingLeft: "32px",
                      paddingRight: "32px",
                      textAlign: "right",
                      flex: "0 0 194px",
                    }}
                  >
                    <label
                      htmlFor="number"
                      style={{ fontSize: "10px", fontWeight: 500 }}
                    >
                      Gender
                    </label>
                  </div>
                  <input
                    type="text"
                    name="number"
                    className="outline-none border w-full rounded-sm text-sm px-2 py-1"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>

                <div
                  className="flex items-center py-5"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "block",
                      paddingLeft: "32px",
                      paddingRight: "32px",
                      textAlign: "right",
                      flex: "0 0 194px",
                    }}
                  >
                    <label
                      htmlFor="number"
                      style={{ fontSize: "10px", fontWeight: 500 }}
                    >
                      Show account suggestions on profiles
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="number"
                      className="outline-none mr-2"
                      value={profile}
                      onChange={(e) => setProfile(e.target.value)}
                    />
                    <Typography
                      style={{ fontSize: "9px", fontWeight: 500 }}
                      variant="span"
                    >
                      Choose whether people can see similar account suggestions
                      on your profile, and whether your account can be suggested
                      on other profiles.
                      <span
                        style={{ fontSize: "9px" }}
                        className="text-blue-500"
                      >
                        [?]
                      </span>
                    </Typography>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom: "16px",
                    alignItems: "center",
                  }}
                >
                  <button
                    type="submit"
                    style={{ color: "white", fontSize: "9px", fontWeight: 500 }}
                    className="bg-blue-500 hover:bg-blue-600 px-3 text-center py-1 rounded-lg mr-9"
                  >
                    Submit
                  </button>
                  <Typography
                    style={{ fontSize: "9px", fontWeight: 500 }}
                    variant="span"
                    className="text-blue-500 hover:text-blue-900 cursor-pointer"
                  >
                    Temporary deactivate my account
                  </Typography>
                </div>
              </form>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default ProfileForm;
