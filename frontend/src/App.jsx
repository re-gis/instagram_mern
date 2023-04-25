import "./App.css";
import axios from "axios";
import HomePageScreen from "./screens/HomePageScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileScreen from "./screens/ProfileScreen";
import ProfileEditScreen from "./screens/ProfileEditScreen";
import ReelsScreen from "./screens/ReelsScreen";
import MessagesScreen from "./screens/MessagesScreen";

axios.defaults.baseURL = "http://127.0.0.1:2000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="bottom-center" limit={1} />
        <Routes>
          <Route path="/" element={<HomePageScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/:subpages?" element={<ProfileScreen />} />
          <Route
            path="/profile/accounts/edit"
            element={<ProfileEditScreen />}
          />
          <Route path="/reels" element={<ReelsScreen />} />
          <Route path="/messages" element={<MessagesScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
