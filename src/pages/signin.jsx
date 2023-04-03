import React from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../components/Header/header";
import Footer from "../components/footer";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="form">
      <Header />
      <main className="mymain">
        <form action="">
          <h2>SIGN-IN</h2>
          <input
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            required
            placeholder="E-mail:"
            type="e-mail"
          ></input>
          <input
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            required
            placeholder="Password:"
            type="password"
          ></input>
          <button
            onClick={(eo) => {
              eo.preventDefault();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user);
                  navigate("/home");
                  console.log("doooooooooddddd");
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage)
                  
                });
            }}
          >
            sign-in
          </button>
        </form>
        <p>
          don,t have an acount <Link to="/signup">Sign-up</Link>
        </p>
        
      </main>

      <Footer />
    </div>
  );
};

export default Signin;
