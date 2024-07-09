import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Homepage from "./Components/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
