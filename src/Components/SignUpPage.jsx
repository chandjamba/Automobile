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
    console.log(formDataObject);
    // Step1 Create authUser/ account in appwrite. By the use of given below method.//
    const createdAccount = await account.create(
      ID.unique(),
      formDataObject.enterEmail,
      formDataObject.enterPassword
    );
    // Step2 Asap the authUser created then, create login browser session with given below method. //
    if (createdAccount.$id) {
      await account.createEmailPasswordSession(
        formDataObject.enterEmail,
        formDataObject.enterPassword
      );
      // Step3 After signIn browser session created, Sent an email for user verification. //
      const verification = await account.createVerification(
        "http://localhost:5173/confirm-email"
      );
      console.log(verification);
      //Step4 After sent an email for user verification delete the browser session. So, no any user can login without verification complete. //
      // This step is for delete signIn browser session. //
      const deleteAccountSession = await account.deleteSessions();
      console.log(deleteAccountSession);
      // Step5 Navigate the page direct to home page. //
      // Just follow up the given 4 methods and enter to homepage of application. //
      navigate("/signin");
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
