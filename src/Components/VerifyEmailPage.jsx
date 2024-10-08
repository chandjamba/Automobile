import { account } from "../lib/appwrite";
import "./verifyEmailPage.scss";

export default function VerifyEmailPage() {
  const verifyEmailHandler = async () => {
    const verification = await account.createVerification(
      "http://localhost:5173/confirm-email"
    );
    console.log(verification);
  };

  return (
    <div className="verifyEmail">
      <div className="verifyEmail__inner-box">
        <div className="verifyEmail__para-box">
          <p className="verifyEmail__para">
            Please click the below button for Email verification.
          </p>
        </div>
        <button className="verifyEmail__btn" onClick={verifyEmailHandler}>
          {" "}
          Verify Email
        </button>
      </div>
    </div>
  );
}
