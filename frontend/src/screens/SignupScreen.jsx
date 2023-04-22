import React, { useContext, useEffect, useState } from "react";
import FooterTwo from "../components/FooterTwo";
import Container from "@mui/material/Container";
import { Box, Button, Typography } from "@mui/material";
import logo from "../../assets/igLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";
import { Store } from "../Store";
import { toast } from "react-toastify";
import { getError } from "../utils";

const SignupScreen = () => {
  const [emailOrNumber, setEmailOrNumber] = useState('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  const navigate = useNavigate()

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/user/signup", {
        username,
        password,
        fullname,
        number: emailOrNumber,
      });

      dispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate('/')
    } catch (error) {
      toast(getError(error))
    }
  };

  useEffect(() => {
    if(userInfo) {
      navigate('/')
    }
  },[navigate, userInfo])

  return (
    <>
      <Container>
        <Box className="flex justify-center">
          <Box className="border py-8 px-6 mt-3 w-72">
            <Box>
              <div className="pb-3 flex justify-center">
                <Link to={"/home"}>
                  <img className="w-40" src={logo} alt="" />
                </Link>
              </div>
              <div className="w-64 text-center">
                <Typography
                  display={"flex"}
                  flexDirection="column"
                  justifyItems={"center"}
                  variant="span"
                  fontSize={"12px"}
                  fontWeight={500}
                  className="text-gray-500"
                >
                  Sign up to see photos and videos from your friends.
                </Typography>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  style={{ display: "flex" }}
                  className="border text-center px-12 text-xs h-8 items-center bg-blue-500 rounded-lg hover:bg-blue-600 mt-3"
                >
                  <Link to={"https://facebook.com"}>
                    <FacebookIcon color="primary" />
                  </Link>
                  <span
                    style={{ fontSize: "9px", fontWeight: 500 }}
                    className="text-white"
                  >
                    Log in with Facebook
                  </span>
                </button>
              </div>
              <form>
                <div className="flex flex-row items-center justify-between my-3">
                  <div
                    className="bg-gray-300"
                    style={{ height: "0.2px", width: "70px" }}
                  ></div>
                  <div
                    style={{ fontSize: "9px", fontWeight: 500 }}
                    className="text-gray-500"
                  >
                    OR
                  </div>
                  <div
                    className="bg-gray-300"
                    style={{ height: "0.2px", width: "70px" }}
                  ></div>
                </div>

                <div>
                  <input
                    className="border flex outline-none bg-gray-50 pl-2 placeholder:text-xs placeholder:text-gray-500 mb-1 w-60 h-9 rounded-sm"
                    type="text"
                    name="numberEmail"
                    placeholder="Mobile Number"
                    value={emailOrNumber}
                    onChange={(e) => setEmailOrNumber(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    className="border bg-gray-50 flex outline-none pl-2 placeholder:text-xs placeholder:text-gray-500 mb-1 w-60 h-9 rounded-sm"
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="border bg-gray-50 flex outline-none pl-2 placeholder:text-xs placeholder:text-gray-500 mb-1 w-60 h-9 rounded-sm"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="border flex outline-none pl-2 bg-gray-50 placeholder:text-xs placeholder:text-gray-500 mb-1 w-60 h-9 rounded-sm"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div style={{ width: "100%" }} className="text-gray-500">
                  <div className="text-center my-3">
                    <Typography
                      display={"flex"}
                      flexDirection="column"
                      justifyItems={"center"}
                      variant="span"
                      fontSize={"8.5px"}
                    >
                      People who use our service may have uploaded your contact
                      information to Instagram.{" "}
                      <span>
                        <Link
                          className="text-blue-900"
                          to={"/learnmore"}
                          style={{ fontSize: "8.5px" }}
                        >
                          Learn More
                        </Link>
                      </span>
                    </Typography>
                  </div>
                </div>
                <div style={{ width: "100%" }} className="text-gray-500">
                  <div className="text-center my-3">
                    <Typography
                      display={"flex"}
                      flexDirection="column"
                      justifyItems={"center"}
                      variant="span"
                      fontSize={"8.5px"}
                    >
                      By signing up, you agree to our Terms , Privacy Policy and
                      Cookies Policy .
                    </Typography>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                    className="border text-center px-12 text-xs h-8 items-center bg-blue-400 rounded-lg hover:bg-blue-500 mt-3"
                  >
                    <span
                      style={{ fontSize: "9px", fontWeight: 500 }}
                      className="text-white"
                    >
                      Sign up
                    </span>
                  </button>
                </div>
              </form>
            </Box>
          </Box>
        </Box>
        <Box className="flex justify-center mt-2">
          <Box className="border px-2 py-4 w-72">
            <div className="text-center">
              <Typography
                variant="span"
                style={{ fontSize: "9px" }}
                paddingX={"27px"}
              >
                Have an account?{" "}
                <Link
                  to={"/signup"}
                  style={{ fontSize: "9px", fontWeight: 500 }}
                  className="text-blue-400"
                >
                  Log in
                </Link>
              </Typography>
            </div>
          </Box>
        </Box>
        <FooterTwo />
      </Container>
    </>
  );
};

export default SignupScreen;
