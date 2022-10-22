import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign in with Google </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
