import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = (props) => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-full px-20 py-3 flex justify-between items-center">
      <Link to="/">
        <img
          className="w-48"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-16/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </Link>
      <div className="text-white flex justify-between items-center">
        <select className="px-2 rounded-md py-1 bg-gray-700 opacity-80">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
        {!user && (
          <button className="bg-[#E50914] px-4 py-1 rounded-md ml-4">
            <Link to="/login">Sign In</Link>
          </button>
        )}

        {user && (
          <button
            onClick={handleSignOut}
            className="bg-[#E50914] px-4 py-1 rounded-md ml-4"
          >
            Sign Out
          </button>
        )}

        {user && (
          <img
            className="w-10 rounded-md ml-4"
            alt="usericon"
            src={user?.photoURL}
          />
        )}
        {user && <spam>{user?.displayName}</spam>}
      </div>
    </div>
  );
};

export default Header;
