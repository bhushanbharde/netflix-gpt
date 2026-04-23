import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="absolute h-full">
        <img
          className="w-full brightness-[30%]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg"
          alt="back"
        />
      </div>
      <div className="absolute p-2 mx-auto left-0 right-0 top-1/4 my-auto w-1/2 text-white text-center flex flex-col content-center align-middle">
        <h1 className="text-6xl font-extrabold ">
          Unlimited movies, shows, and more
        </h1>
        <p className="my-6 text-xl">Starts at ₹149. Cancel at any time.</p>
        <p className="">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex justify-center my-6">
          <input
            className="w-3/5 bg-[#111] px-8 py-4 opacity-70 rounded-md border border-gray-500"
            type="text"
            placeholder="Email address"
          />
          <button className="ml-4 bg-[#E50914] px-8 py-2 rounded-md text-xl font-bold hover:bg-red-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
