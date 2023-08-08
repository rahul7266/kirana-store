import Navbar from "./componenets/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./componenets/Home"
import SignIn from "./componenets/SignIn"
import SignUp from "./componenets/SignUp"
import Profile from "./componenets/Profile"
import './app.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/signup" element = {<SignUp/>}>SignUp</Route>
          <Route path="/signin" element = {<SignIn/>}>SignIn</Route>
          <Route path="/profile" element = {<Profile/>}>Profile</Route>

        </Routes>
        <ToastContainer
         
          theme="dark"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
