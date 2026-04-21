import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
    
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg"
          alt="back"
        />
      </div>
      <form className="absolute bg-black text-white p-12 my-40 left-0 right-0 mx-auto w-[400px] bg-opacity-80 flex flex-col">
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
          type="text"
          placeholder="Email Address"
          className="px-4 py-3 my-2 bg-[#444] rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 my-2 bg-[#444] rounded-md"
        />
        <button type="submit" className="px-4 py-4 mt-6 bg-red-600 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleSignInForm} className="cursor-pointer mt-3">
          {isSignInForm
            ? "New to Netflix? Sing up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
