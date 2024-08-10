import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LibraryPage from './pages/LibraryPage';
import AdminPage from "./pages/AdminPage";
import Navbar from "./components/Navbar/navbar";
import LoginDropdown from "./components/LoginDropdown/loginDropdown";
import LogOutDropdown from "./components/LogOutDropdown/logOutDropdown";
import LoginSignupPage from './pages/LoginSignupPage';

import { useState } from 'react';

const App: React.FC = () => {
  const [loginDropdownDisplay, setLoginDropdownDisplay] = useState<string>("none");
  const [logOutDropdownDisplay, setLogOutDropdownDisplay] = useState<string>("none");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

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
          <Route path="/login-signup" element={<LoginSignupPage setLoggedIn={setLoggedIn} loggedIn={loggedIn} setToken={setToken} />} />
          <Route path="/" element={<LibraryPage loggedIn={loggedIn} token={token} />} />
          <Route path="/admin" element={<AdminPage token={token} loggedIn={loggedIn}/>} />
        </Routes>
      </BrowserRouter> 
    </div>   
  );
}

export default App;
