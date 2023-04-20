import "./App.css";
import axios from 'axios'
import HomePageScreen from "./screens/HomePageScreen";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:2000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <HomePageScreen />
      </BrowserRouter>
    </>
  );
}

export default App;
