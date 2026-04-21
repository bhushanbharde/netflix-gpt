import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateLoginForm } from "../utils/validateLoginForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleForm = () => {
      const message = validateLoginForm(email.current.value, password.current.value);
    setErrorMessage(message);
    
    if (message) return;

    if (!isSignInForm) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+'-'+errorMessage);
          console.log(error);
        });
    }
    else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header page={"login"} />
      <div className="absolute h-full">
        <img
          className="w-full brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg"
          alt="back"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute bg-black text-white p-12 my-40 left-0 right-0 mx-auto w-[400px] bg-opacity-80 flex flex-col"
      >
        <h1 className="text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 my-2 bg-[#444] rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="px-4 py-3 my-2 bg-[#444] rounded-md"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-4 py-3 my-2 bg-[#444] rounded-md"
        />
        <span className="text-red-500 text-sm mb-2">{errorMessage}</span>

        <button
          onClick={handleForm}
          type="submit"
          className="px-4 py-2 mt-6 bg-[#E50914] rounded-sm"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && (
          <div className="flex justify-between my-2 text-gray-400">
            <span>
              <input type="checkbox" className="mr-1" />
              Remember me
            </span>
            <span className="cursor-pointer">Need help?</span>
          </div>
        )}

        <p
          onClick={handleSignInForm}
          className="cursor-pointer mt-3 text-gray-200"
        >
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already a user? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
