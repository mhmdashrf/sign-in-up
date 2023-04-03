import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/footer";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Layout from "../components/Layout";

const About = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading) {
      navigate("/signin");
    }
  });
  return (
    <Layout title="ABOUT PAGE">
      <div>About Page</div>
    </Layout>
  );
};

export default About;
