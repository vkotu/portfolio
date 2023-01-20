import { createRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
inject();
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
