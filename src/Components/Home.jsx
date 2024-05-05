import { useState } from "react";
import { useNavigate } from "react-router-dom";
let loginstatus;
function Home() {
  const navigate = useNavigate();

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const handleLogin = (event) => {
    username = document.getElementById("uname").value;
    password = document.getElementById("upassword").value;
    setUsername(username);
    setPassword(password);
    if (username == "Anil" && password == "tech") {
      navigate("/MainMenu");
    }
  };

  return (
    <>
      <div className="loginform">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            id="uname"
            className="userinput"
            size="30"
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="userpassword"
            placeholder="Enter your password"
            id="upassword"
            className="userinput"
            size="30"
          />
        </div>
        <button className="loginbtn" onClick={handleLogin}>
          Login
        </button>
      </div>
      {/* <Userlogin name={username} password={password}></Userlogin> */}
    </>
  );
}

export default Home;
