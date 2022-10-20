import {
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
} from "../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}> Sign in with Google </button>
      <h1>Sign In Page</h1>
    </div>
  );
};

export default SignIn;
