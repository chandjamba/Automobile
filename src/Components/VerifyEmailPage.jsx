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
    <button className="verifyEmail" onClick={verifyEmailHandler}>
      {" "}
      Verify Email
    </button>
  );
}
