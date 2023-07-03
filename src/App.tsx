import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "../src/styles/App.css";
import Box from "./components/Box";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="animation">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 0, 1]} />
        </Canvas>
      </div>
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
