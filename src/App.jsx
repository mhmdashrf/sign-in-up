import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";

function App() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (!user && !loading) {
      navigate("/signin");
    }
  });

  return (
    <div className="container">
      <Header />
      <main>HOME Page</main>
      <Footer />
    </div>
  );
}

export default App;
