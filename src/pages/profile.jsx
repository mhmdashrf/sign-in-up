import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/footer";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
  // import { dayjs } from "dayjs";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
    useEffect(() => {
    if (!loading && !user) {
      navigate("/signin");
    }
  });
  if (loading) {
    return (
      <div>
        <Header />
        <main>
          <p>loading...........</p>
        </main>
        <Footer />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error:{error}</p>
      </div>
    );
  }

  if (user) {
    return (
      <div className="container">
        <Header />
        {user && (
          <main>
            <h6> UserName:{user.displayName}</h6>
            <h6>E-Mail:{user.email}</h6>
            <h6>sign in:{user.metadata.lastSignInTime}</h6>
            {/* <h6>acount create: {dayjs(user.lastSignInTime).fromNow()}</h6> */}
          </main>
        )}
        <Footer />
      </div>
    );
  }
};

export default Profile;
