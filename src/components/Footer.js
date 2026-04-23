import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-12 px-24">
      <div>
        <p className="text-center">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex justify-center my-6">
          <input
            className="w-2/5 bg-[#222] px-8 py-4 opacity-70 rounded-md border border-gray-500"
            type="text"
            placeholder="Email address"
          />
          <button className="ml-4 bg-[#E50914] px-8 py-2 rounded-md text-xl font-bold hover:bg-red-700">
            Get Started
          </button>
        </div>
      </div>

      <div className="py-10 text-gray-400 text-[15px]">
        <p className="mb-8">
          Questions? Call <u>000-800-919-1743</u>
        </p>
        <div className="">
          <ul className="grid grid-cols-4 gap-2">
            <li>
              <Link to="#">FAQ</Link>
            </li>
            <li>
              <Link to="#">Help Centre</Link>
            </li>
            <li>
              <Link to="#">Account</Link>
            </li>
            <li>
              <Link to="#">Media Centre</Link>
            </li>
            <li>
              <Link to="#">Investor Relations</Link>
            </li>
            <li>
              <Link to="#">Jobs</Link>
            </li>
            <li>
              <Link to="#">Ways to Watch</Link>
            </li>
            <li>
              <Link to="#">Terms of Use</Link>
            </li>
            <li>
              <Link to="#">Privacy</Link>
            </li>
            <li>
              <Link to="#">Cookie Preferences</Link>
            </li>
            <li>
              <Link to="#">Corporate Information</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Speed Test</Link>
            </li>
            <li>
              <Link to="#">Legal Notices</Link>
            </li>
            <li>
              <Link to="#">Only on Netflix</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6">
        <select className="px-4 rounded-md py-1 bg-black bg-opacity-0 border border-[#999]">
          <option>English</option>
          <option>हिन्दी</option>
        </select>

        <p className="text-gray-500 text-sm pt-10">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </div>
  );
};

export default Footer;
