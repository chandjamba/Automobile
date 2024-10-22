import { useState } from "react";
import { account, ID } from "../lib/appwrite";
import "./signUpPage.scss";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function togglePassword() {
    setShowPassword(!showPassword);
  }
  const signUpButtonHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataEntries = formData.entries();
    const formDataObject = Object.fromEntries(formDataEntries);
    const createdAccount = await account.create(
      ID.unique(),
      formDataObject.enterEmail,
      formDataObject.enterPassword
    );
    if (createdAccount.$id) {
      navigate("/verify-email");
    }

    console.log(createdAccount);
  };

  return (
    <div className="signUp">
      <form className="signUp__form" onSubmit={signUpButtonHandler}>
        <div className="signUp__wrapper">
          <h1>Sign Up</h1>
          <div className="signUp__email-input-box">
            <input
              className="signUp__email-input"
              type="email"
              name="enterEmail"
              placeholder="Email"
              required
            />
          </div>
          <div className="signUp__password-input-box">
            <input
              className="signUp__password-input"
              type={showPassword ? "text" : "password"}
              name="enterPassword"
              placeholder="Password"
              required
            />
          </div>
          <button
            className="signUp__show-password-btn"
            onClick={togglePassword}
            type="button"
          >
            {showPassword ? "Hide password" : "Show password"}
          </button>
          <button className="signUp__submit-btn" type="submit">
            Sign Up
          </button>

          <div className="signUp__reCaptcha-protection-box">
            <p className="signUp__reCaptcha-protection">
              {" "}
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot. <a href="#">Learn more.</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
