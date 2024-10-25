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
import CarPaymentPage from "./Components/CarPaymentPage";
import SignUpPage from "./Components/SignUpPage";
import SignInPage from "./Components/SignInPage";
import VerifyEmailPage from "./Components/VerifyEmailPage";
import ConfirmEmail from "./Components/ConfirmEmail";
import { AuthContextProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
        </Routes>

        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route
              path="/homepage/CategoryCarRent"
              element={<CategoryCarRent />}
            />
            <Route path="/admin" element={<Admin />} />
            <Route path="/createCarFormPage" element={<CreateCarFormPage />} />
            <Route
              path="/homepage/CarDetailPage/:carId"
              element={<CarDetailPage />}
            />
            <Route
              path="/homepage/CarDetailPage/:carId/carPaymentPage"
              element={<CarPaymentPage />}
            />
          </Routes>
        </AuthContextProvider>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
