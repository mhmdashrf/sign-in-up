import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/footer";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Signup = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [haserorr, sethaserorr] = useState(false);
  const [firebaseerorr, setfirebaseerorr] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");

  if (loading) {
    return (
      <div>
        <Header />
        <main>
          <p>loading.......</p>
        </main>
        <Footer />
      </div>
    );
  }

  // if (user) {
  return (
    <div className="form">
      <Header />
      <main>
        <form action="">
          <h2>SIGN-UP</h2>

          <input
            onChange={(eo) => {
              setusername(eo.target.value);
            }}
            required
            placeholder="UserName"
            type="text"
          ></input>
          <input
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            required
            placeholder="E-mail"
            type="e-mail"
          ></input>
          <input
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            required
            placeholder="Password"
            type="password"
          ></input>
          <button
            onClick={(eo) => {
              eo.preventDefault();

              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;

                  sendEmailVerification(auth.currentUser).then(() => {
                    console.log("Email verification sent!");
                    // ...
                  });

                  updateProfile(auth.currentUser, {
                    displayName: username,
                  })
                    .then(() => {
                      navigate("/home");
                    })
                    .catch((error) => {
                      console.log(error.code);
                      // An error occurred
                      // ...
                    });

                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  sethaserorr(true);
                  setfirebaseerorr(errorMessage);
                  console.log("errorMessage");

                  switch (errorCode) {
                    case "auth/invalid-email":
                      setfirebaseerorr("Wrong E-mail");
                      break;

                    case "auth/user-not-found":
                      setfirebaseerorr("Wrong Email");
                      break;
                    case "auth/wrong-password":
                      setfirebaseerorr("Wrong Password");
                      break;

                    default:
                      setfirebaseerorr("Please check your email & password");
                      break;
                  }

                  console.log("nooooooooo");
                  // ..
                });
            }}
          >
            sign-up
          </button>
          {haserorr && <h2>{firebaseerorr}</h2>}

          <p>
            Already have an acounnt <Link to="/signin">Sign-in</Link>
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
  // }
};

export default Signup;
