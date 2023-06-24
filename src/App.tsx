import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={About} />
        <Route path="/Projects" Component={Projects} />
        <Route path="/Contact" Component={Contact} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
