import { account, ID } from "../lib/appwrite";
import "./signUpPage.scss";

export default function SignUpPage() {
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
    console.log(createdAccount);
  };

  return (
    <form className="signUp" onSubmit={signUpButtonHandler}>
      <input
        className="signUp__email-input"
        type="email"
        name="enterEmail"
        placeholder="Email"
      />
      <input
        className="signUp__password-input"
        type="password"
        name="enterPassword"
        placeholder="password"
      />
      <button className="signUp__btn">Sign Up</button>
    </form>
  );
}
