import React, { useContext, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import logo from "../../assets/igLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import FooterTwo from "../components/FooterTwo";
import axios from "axios";
import { Store } from "../Store";
import { toast } from "react-toastify";
import { getError } from "../utils";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/user/login", {
        username,
        password,
      });

      dispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      toast.error(getError(error));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  return (
    <Container style={{ marginTop: "100px" }}>
      <Box className="flex justify-center">
        <Box className="border px-8 py-8">
          <form>
            <Box>
              <div className="pb-8 flex justify-center">
                <Link to={"/home"}>
                  <img className="w-40" src={logo} alt="" />
                </Link>
              </div>
              <div>
                <input
                  className="border bg-gray-50 flex outline-none pl-2 placeholder:text-xs placeholder:text-gray-500 mb-1 w-60 h-9 rounded-sm"
                  type="text"
                  name="number"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div>
                <input
                  className="border bg-gray-50 flex outline-none pl-2 placeholder:text-xs placeholder:text-gray-500 mb-1 w-60 h-9 rounded-sm"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button
                  className="bg-blue-400 text-white w-60 rounded-lg h-7 mt-3"
                  type="submit"
                  onClick={handleSubmit}
                >
                  <span style={{ fontWeight: 500, fontSize: "9px" }}>
                    Log in
                  </span>
                </button>
              </div>
            </Box>

            <div className="flex flex-row items-center justify-between mt-3">
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
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent="center"
              mt={"12px"}
              className="cursor-pointer"
            >
              <FacebookIcon color="primary" className="mr-1" />
              <Typography
                className="text-xs text-blue-900"
                style={{ fontWeight: 500 }}
                variant="span"
              >
                <Link
                  to={"https://facebook.com"}
                  className="text-blue-900 text-xs"
                >
                  {" "}
                  Log in with Facebook
                </Link>
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent="center" mt="12px">
              <Typography variant="span">
                <Link
                  style={{ fontSize: "8px" }}
                  className="text-gray-500"
                  to={"/passreset"}
                >
                  Forgot password?
                </Link>
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
      <Box className="flex justify-center mt-2">
        <Box className="border px-8 py-8">
          <div>
            <Typography
              variant="span"
              style={{ fontSize: "9px" }}
              paddingX={"27px"}
            >
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                style={{ fontSize: "9px", fontWeight: 500 }}
                className="text-blue-400"
              >
                Sign up
              </Link>
            </Typography>
          </div>
        </Box>
      </Box>
      <FooterTwo />
    </Container>
  );
};

export default LoginScreen;
