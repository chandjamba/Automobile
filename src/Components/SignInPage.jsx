import { useState } from "react";
import { account } from "../lib/appwrite";
import "./signInPage.scss";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  const signInButtonHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataEntries = formData.entries();
    const formDataObject = Object.fromEntries(formDataEntries);
    const loggedInAccount = await account.createEmailPasswordSession(
      formDataObject.enterEmail,
      formDataObject.enterPassword
    );

    if (loggedInAccount.$id) {
      navigate("/");
    }
    console.log(loggedInAccount);
  };
  return (
    <div className="signIn">
      <form className="signIn__form" onSubmit={signInButtonHandler}>
        <div className="signIn__wrapper">
          <h1>Sign In</h1>
          <div className="signIn__email-input-box">
            <input
              className="signIn__email-input"
              type="email"
              name="enterEmail"
              placeholder="Email"
              required
            />
          </div>
          <div className="signIn__password-input-box">
            <input
              className="signIn__password-input"
              type={showPassword ? "text" : "password"}
              name="enterPassword"
              placeholder="Password"
              required
            />
          </div>
          <button
            className="signIn__show-password-btn"
            onClick={togglePassword}
            type="button"
          >
            {showPassword ? "hide password" : "show password"}
          </button>
          <button className="signIn__submit-btn" type="submit">
            Sign In
          </button>

          <div className="signIn__reCaptcha-protection-box">
            <p className="signIn__reCaptcha-protection">
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
