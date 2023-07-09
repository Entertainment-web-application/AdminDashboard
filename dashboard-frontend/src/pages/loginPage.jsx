import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

import { useHttpClient } from "../hooks/http-hook";
import { AuthContext } from "../context/auth-context";

export default function LoginPage() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { sendRequest } = useHttpClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Error state variable

  const loginHandler = async (event) => {
    event.preventDefault();
    setError(null); // Reset the error state before each login attempt

    try {
      const responseData = await sendRequest(
        "http://localhost:3500/admin/login",
        "POST",
        JSON.stringify({
          email,
          password,
        }),
        {
          "Content-type": "application/json",
        }
      );
      auth.login(
        responseData.admin_info.admin_id,
        responseData.token,
        responseData.admin_info
      );
      navigate(`/${responseData.admin_info.role}/dashboard`);
    } catch (err) {
      setError("Email or password is incorrect"); // Set the error state with the error message
    }
  };

  return (
    <div className="admin-login__container">
      <div className="row w-100 p-2">
        <div className="col-xs-12 col-lg-4 px-4 center mt-4">
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />

        <h1 className="fw-bold mb-2 text-center mt-4">Welcome Back</h1>
          <h6 className="mb-5 text-center">Please enter your details</h6>
          {error && (
            <div className="error-message" style={{ color: '390342' }}>{error}</div> // Display the error message if error state is not null
          )}
          <br/>
          <form onSubmit={loginHandler} className="w-100">
            <input
              type="email"
              className="form-control"
              style={{ marginLeft:"2px", marginTop:"10px" }}
              placeholder="Email"

              onChange={(e) => setEmail(e.target.value)}
              required

            />
            
            <input
              type="password"
              className="form-control"
              style={{ marginLeft:"2px", marginTop:"10px" }}
              placeholder="Password"

              onChange={(e) => setPassword(e.target.value)}
              required

            />
            <br />
            <button className="btn btn-primary purple-button ms-1" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="col-xs-12 col-lg-8 center">
          <lottie-player
            src="https://assets8.lottiefiles.com/private_files/lf30_m6j5igxb.json"
            background="transparent"
            speed="1"
            style={{ width: "500px", height: "500px" , marginLeft:"230px", marginTop:"150px"  }}
            loop
            autoplay
          ></lottie-player>
        </div>

        
      </div>
    </div>
  );
}
