import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  //////    loading//////////
    //////    loading//////////
  //////    loading//////////

  if (loading) {
    return (
      <div>
        <p>lastSignInTimeialising user.... </p>
      </div>
    );
  }

  if (error) {
    <p>Error:{error}</p>;
  }

 
   
  return (
    <div className="myheader">
      <header className="main-header">
        <NavLink to="/home">
          {" "}
          <h2>mohamed</h2>
        </NavLink>

        <ul>
          {user && (
            <NavLink className="main-link" to="/home">
              <li>Home</li>
            </NavLink>
          )}

          {user && (
            <NavLink className="main-link" to="/profile">
              <li>Profile</li>
            </NavLink>
          )}

          {user && (
            <NavLink className="main-link" to="/about">
              <li>About</li>
            </NavLink>
          )}

          {!user && (
            <NavLink className="main-link" to="/signin">
              <li>Sign-in</li>
            </NavLink>
          )}

          {!user && (
            <NavLink className="main-link" to="/signup">
              <li>Sign-up</li>
            </NavLink>
          )}
          {user && (
            <NavLink
              to="/signin"
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.
                  })
                  .catch((error) => {
                    // An error happened.
                  });
              }}
              className="main-link"
            >
              <li>Sign-out</li>
            </NavLink>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Header;
