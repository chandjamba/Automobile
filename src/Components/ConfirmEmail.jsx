import { useSearchParams } from "react-router-dom";
import { account } from "../lib/appwrite";
import "./verifyEmailPage.scss";

export default function ConfirmEmail() {
  const [params] = useSearchParams();
  const secret = params.get("secret");
  const userId = params.get("userId");
  console.log(secret);
  console.log(userId);

  const verifyEmailHandler = async () => {
    const verified = await account.updateVerification(userId, secret);
    console.log(verified, "verification Done");
  };

  return (
    <button className="verifyEmail" onClick={verifyEmailHandler}>
      {" "}
      Confirm Email
    </button>
  );
}
