import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import login from "../../services/login";
import signUp from "../../services/signUp";

interface LoginSignupProps {
  formType: "Log In" | "Sign Up";
  setLoggedIn: (value: boolean) => void;
  loggedIn: boolean;
  setToken: (token: string) => void;
}

const LoginSignup: React.FC<LoginSignupProps> = ({ formType, setLoggedIn, loggedIn, setToken }) => {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signupFlag, setSignupFlag] = useState<boolean>(false);
  const [wrongPass, setWrongPass] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async (setLoggedIn: (value: boolean) => void, setToken: (token: string) => void) => {
    try {
      const response = await login(email, password);
      if (response.user_info) {
        setLoggedIn(true);
        setToken(response.access_token);
      }
      if (response.user_info.role === 0) {
        navigate("/");
      } else if (response.user_info.role === 1) {
        navigate("/admin");
      } else {
        console.error("Unexpected user_info value:", response.user_info);
      }
    } catch (error) {
      setLoggedIn(false);
      setWrongPass(true);
      console.error("Login failed:", error);
    }
  };

  const checkSignupPassword = () => {
    const condition1 = /\d/.test(password) === false;
    const condition2 = password.length < 8;
    if (condition1 || condition2) {
      setSignupFlag(true);
    } else {
      setSignupFlag(false);
    }
  };

  const handleSignUp = async (setLoggedIn: (value: boolean) => void, setToken: (token: string) => void) => {
    checkSignupPassword();
    const signupResponse = await signUp(email, password, fname, lname);
    if (signupResponse.user) {
      await handleLogin(setLoggedIn, setToken);
    }
  };

  return (
    <div className={styles["form-area"]}>
      <h2 style={{ backgroundColor: "transparent", marginTop: "-2%" }}>
        {formType}
      </h2>
      {formType === "Sign Up" && (
        <div id={styles["name-container"]}>
          <div className={styles["name-container-inner"]}>
            <div className={styles["name-identifier"]}>First Name</div>
            <input
              className={styles["name-input"]}
              placeholder="first name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className={styles["name-container-inner"]}>
            <div className={styles["name-identifier"]}>Last Name</div>
            <input
              className={styles["name-input"]}
              placeholder="last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
        </div>
      )}
      <div className={styles["email-input"]}>
        <p style={{ backgroundColor: "transparent" }}>Email</p>
        <input
          className={styles["email-header"]}
          placeholder="example@pwc.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles["password-input"]}>
        <p style={{ backgroundColor: "transparent" }}>Password</p>
        <input
          className={styles["password-header"]}
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {formType === "Sign Up" && (
        <div id={styles["signup-rules"]}>
          <div id={styles["rules-list"]}>
            <p style={{ margin: "1%", backgroundColor: "transparent", color: "gray" }}>
              Ensure password has:
            </p>
            <li className={styles["rules"]}>8 characters or more</li>
            <li className={styles["rules"]}>At least one number</li>
            <li className={styles["rules"]}>No symbols</li>
          </div>
        </div>
      )}

      <div className={styles["button-div"]}>
        <button
          onClick={formType === "Log In" ? () => handleLogin(setLoggedIn, setToken) : () => handleSignUp(setLoggedIn, setToken)}
          className={styles["medium-button"]}
        >
          {formType}
        </button>
        {loggedIn === false && wrongPass && (
          <div id={styles["wrong-login"]}>
            Wrong email or password, please try again
          </div>
        )}
        {signupFlag && (
          <div id={styles["wrong-login"]}>
            Password does not meet the requirements
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
