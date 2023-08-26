import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "../src/styles/App.css";

function App() {
  const location = useLocation();

  return (
    <div>
      <Header />
      <div className="main">
        <Routes key={location.pathname} location={location}>
          <Route path="/" Component={About} />
          <Route path="/Projects" Component={Projects} />
          <Route path="/Contact" Component={Contact} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
