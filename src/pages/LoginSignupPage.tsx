import React from 'react';
import LoginSignup from "../components/LoginSignup/loginSignup";

interface LoginSignupPageProps {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  loggedIn: boolean;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const LoginSignupPage: React.FC<LoginSignupPageProps> = ({ setLoggedIn, loggedIn, setToken }) => {
  const styles_outer: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "70em",
    marginTop: "5%",
    marginBottom: "5%",
  };

  const styles_inner: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "50%",
    height: "100%",
    backgroundColor: "#172242",
    borderRadius: "10px",
  };

  return (
    <div style={styles_outer}>
      <div style={styles_inner}>
        <LoginSignup
          formType="Log In"
          setLoggedIn={setLoggedIn}
          loggedIn={loggedIn}
          setToken={setToken}
        />
        <hr style={{ width: "80%" }} />
        <LoginSignup
          formType="Sign Up"
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          setToken={setToken}
        />
      </div>
    </div>
  );
};

export default LoginSignupPage;
