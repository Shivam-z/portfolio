import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import PDFViewer from "./components/PdfViewer";
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
          <Route path="/contacts" element={<Contact />} />
          <Route path="/resume" element={<PDFViewer />} />
        </Routes>
      </Template>
    </BrowserRouter>
  );
};

export default App;
