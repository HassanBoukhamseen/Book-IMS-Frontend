import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LibraryPage from './pages/LibraryPage';
import AdminPage from "./pages/AdminPage"
import Navbar from "./components/Navbar/navbar";
import LoginDropdown from "./components/LoginDropdown/loginDropdown";
import LogOutDropdown from "./components/LogOutDropdown/logOutDropdown";
import LoginSignupPage from './pages/LoginSignupPage';

import { useState } from 'react';


function App() {
  const [loginDropdownDisplay, setLoginDropdownDisplay] = useState("none");
  const [logOutDropdownDisplay, setLogOutDropdownDisplay] = useState("none");
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("")

  return (
    <div>
      <Navbar 
        loginDropdownDisplay={loginDropdownDisplay}
        setLoginDropdownDisplay={setLoginDropdownDisplay}
        logOutDropdownDisplay={logOutDropdownDisplay}
        setLogOutDropdownDisplay={setLogOutDropdownDisplay}
        loggedIn={loggedIn}
      />    
      <LoginDropdown
        loginDropdownDisplay={loginDropdownDisplay}
      /> 
      <LogOutDropdown
        logOutDropdownDisplay={logOutDropdownDisplay}
        setLoggedIn={setLoggedIn}
      /> 
    <BrowserRouter>
    <Routes>
      <Route path="/login-signup" element={<LoginSignupPage setLoggedIn={setLoggedIn} loggedIn={loggedIn} setToken={setToken}/>} />
      <Route path="/" element={<LibraryPage loggedIn={loggedIn} token={token}/>} />
      <Route path="/admin" element={<AdminPage token={token}/>} />
    </Routes>
  </BrowserRouter> 
  </div>   
  );
}

export default App;
