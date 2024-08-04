import LoginSignup from "../components/LoginSignup/loginSignup"

function LoginSignupPage(props) {
  const styles_outer = {
    "display":"flex",
    "flexDirection":"column",
    "justifyContent": "space-evenly",
    "alignItems": "center",
    "width":"100%",
    "height":"70em",
    "marginTop": "5%",
    "marginBottom": "5%"
    
  }

  const styles_inner = {
    "display":"flex",
    "flexDirection":"column",
    "justifyContent": "space-evenly",
    "alignItems": "center",
    "width":"50%",
    "height":"100%",
    "backgroundColor": "#172242",
    "borderRadius": "10px"
  }


  return (
    <div style={styles_outer}>
      <div style={styles_inner}>
        <LoginSignup
          formType={"Log In"}
          setLoggedIn={props.setLoggedIn}
          loggedIn={props.loggedIn}
          setToken={props.setToken}
        />
        <hr style={{"width": "80%"}}/>
        <LoginSignup
          formType={"Sign Up"}
          setLoggedIn={props.setLoggedIn}
          setToken={props.setToken}
        />
      </div>
    </div>
    
  );
}

export default LoginSignupPage;
