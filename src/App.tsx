import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "../src/styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" Component={About} />
          <Route path="/Projects" Component={Projects} />
          <Route path="/Contact" Component={Contact} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
