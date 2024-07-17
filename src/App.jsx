import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import CategoryCarRent from "./Components/CategoryCarRent";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/Homepage/CategoryCarRent"
            element={<CategoryCarRent />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
