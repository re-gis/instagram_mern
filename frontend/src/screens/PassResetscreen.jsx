import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/igLogo.svg";
import FooterTwo from "../components/FooterTwo";
import axios from 'axios'
import {toast} from 'react-toastify'
import {getError} from '../utils'


const PassResetscreen = () => {
    const [username, setUsername] = useState('')
    const [number, setNumber] = useState('')
    const [newPass, setNewPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const navigate = useNavigate()


    const handleReset = async(e) => {
        e.preventDefault()
        try {
            
            const {data} = await axios.post('/pass/reset', {
                username,
                number,
                newPass,
                confirmPass
            })
            navigate('/login')
            toast.success(data.message)
        } catch (error) {
         toast.error(getError(error))   
        }
    }

  return (
    <>
      <Container style={{ marginTop: "100px" }}>
        <Box className="flex justify-center">
          <Box className="border px-8 py-8">
            <form>
              <Box display={"flex"} flexDirection={'column'} textAlign={"center"}>
                <div className="pb-8 flex justify-center">
                  <Link to={"/home"}>
                    <img className="w-40" src={logo} alt="" />
                  </Link>
                </div>

                <div className="mb-5 h-9 bg-gray-50 hover:bg-gray-100 rounded-md cursor-pointer">
                    <Typography style={{fontSize: '10px'}} className="pt-2 text-blue-400">Password Reset</Typography>
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
                    className="border bg-gray-50 flex outline-none pl-2 placeholder:text-xs placeholder:text-gray-500 mb-1 w-60 h-9 rounded-sm"
                    type="text"
                    placeholder="Phone number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                
                <div>
                  <input
                    className="border bg-gray-50 flex outline-none pl-2 placeholder:text-xs placeholder:text-gray-500 mb-1 w-60 h-9 rounded-sm"
                    type="password"
                    placeholder="New Password"
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                  />
                </div>
                
                <div>
                  <input
                    className="border bg-gray-50 flex outline-none pl-2 placeholder:text-xs placeholder:text-gray-500 mb-1 w-60 h-9 rounded-sm"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                  />
                </div>

                <div>
                  <button
                    className="bg-blue-400 text-white w-60 rounded-lg h-7 mt-3"
                    type="submit"
                    onClick={handleReset}
                  >
                    <span style={{ fontWeight: 500, fontSize: "9px" }}>
                      Reset Password
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
              <Box display={"flex"} justifyContent="center" mt="12px">
                <Typography variant="span">
                  <Link
                    style={{ fontSize: "8px" }}
                    className="text-gray-500"
                    to={"/login"}
                  >
                    Return to Log in
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
    </>
  );
};

export default PassResetscreen;
