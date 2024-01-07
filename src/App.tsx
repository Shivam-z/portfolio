import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Template from "./components/Template";

const App = () => {
  return (
    <BrowserRouter>
      <Template>
        <Routes>
          <Route path="/" element={<Education />} />
          <Route path="/home" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </Template>
    </BrowserRouter>
  );
};

export default App;
