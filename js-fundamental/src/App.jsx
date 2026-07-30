import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Basics from "./pages/Basics/Basics";
import Functions from "./pages/Functions/Functions";
import Arrays from "./pages/Arrays/Arrays";
import Async from "./pages/Async/Async";
import ES6Features from "./pages/ES6Features/ES6Features";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"element={<Basics />}/>
        <Route path="/functions"element={<Functions />}/>
        <Route path="/arrays"element={<Arrays />}/>
        <Route path="/async"element={<Async />}/>
        <Route path="/es6features" element={<ES6Features/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;