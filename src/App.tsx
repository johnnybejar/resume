import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "../src/styles/App.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="main">
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={{ enter: 400, exit: 400 }}
          >
            <Routes>
              <Route path="/" Component={About} />
              <Route path="/Projects" Component={Projects} />
              <Route path="/Contact" Component={Contact} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer />
    </>
  );
}

export default App;
