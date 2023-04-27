import { Avatar } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Store } from "../../Store";

const Profile = () => {
  const params = useParams();
  const { user } = params;
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);
  return (
    <>
      {userInfo && (
        <div
          style={{ display: "flex" }}
          className="border-b w-full pb-10 pl-12 text-center items-center"
        >
          <Avatar
          src={userInfo.photo}
            style={{ width: "80px", height: "80px" }}
            className="mr-20 cursor-pointer"
          />
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="gap-4"
          >
            <div
              style={{ display: "flex" }}
              className="justify-between items-center gap-3"
            >
              <h1 style={{ fontSize: "13px" }}>{userInfo.username}</h1>
              <Link to={'/profile/accounts/edit'}>
                <button
                  className="border px-3 py-1 bg-gray-100 border-none rounded-lg hover:bg-gray-200"
                  style={{ fontSize: "10px", fontWeight: 500 }}
                >
                  Edit Profile
                </button>
              </Link>
              <SettingsOutlinedIcon className="cursor-pointer" />
            </div>

            <div
              style={{ display: "flex" }}
              className="justify-between gap-5 text-sm items-center"
            >
              <h1>
                <b className="text-sm">1</b> post
              </h1>
              <h1 className="cursor-pointer">
                <b className="text-sm">77k</b> followers
              </h1>
              <h1 className="cursor-pointer">
                <b className="text-sm">1.2k</b> following
              </h1>
            </div>

            <div
              style={{ display: "flex", fontWeight: 500 }}
              className="text-sm items-center"
            >
              <h1>{userInfo.fullname}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
