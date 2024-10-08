import { account } from "../lib/appwrite";
import "./signInPage.scss";

export default function SignInPage() {
  const signInButtonHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataEntries = formData.entries();
    const formDataObject = Object.fromEntries(formDataEntries);
    const loggedInAccount = await account.createEmailPasswordSession(
      formDataObject.enterEmail,
      formDataObject.enterPassword
    );
    console.log(loggedInAccount);
  };
  return (
    <form className="signIn" onSubmit={signInButtonHandler}>
      <input
        className="signIn__email-input"
        type="email"
        name="enterEmail"
        placeholder="Email"
      />
      <input
        className="signIn__password-input"
        type="password"
        name="enterPassword"
        placeholder="password"
      />
      <button className="signIn__btn">Sign In</button>
    </form>
  );
}
