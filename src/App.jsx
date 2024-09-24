import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./lib/appwrite";

import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import CategoryCarRent from "./Components/CategoryCarRent";
import Admin from "./Components/Admin";
import CreateCarFormPage from "./Components/CreateCarFormPage";
import CarDetailPage from "./Components/CarDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/homepage/CategoryCarRent"
            element={<CategoryCarRent />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/createCarFormPage" element={<CreateCarFormPage />} />
          <Route
            path="/homepage/carDetailPage/:carId"
            element={<CarDetailPage />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
