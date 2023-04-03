import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/footer";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading) {
      navigate("/signin");
    }
  });

  return (
    <div className="container">
      <Header />
      {user && <main>Welcome: {user.displayName}</main>}
      <Footer />
    </div>
  );
};

export default Home;
