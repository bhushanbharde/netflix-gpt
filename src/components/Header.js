import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../utils/constant";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-full px-20 py-3 flex justify-between items-center">
      <Link to="/">
        <img
          className="w-48"
          src={logo}
          alt="logo"
        />
      </Link>
      <div className="text-white flex justify-between items-center relative">
        <select className="px-4 rounded-md py-1 bg-gray-700 opacity-80 border border-[#999]">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
        {!user && (
          <button className="bg-[#E50914] px-4 py-1 rounded-md ml-4">
            <Link to="/login">Sign In</Link>
          </button>
        )}

        {user && (
          <img
            onClick={handleShowMenu}
            className="w-10 rounded-md ml-4 cursor-pointer"
            alt="usericon"
            src={user?.photoURL}
          />
        )}

        {showMenu && user && (
          <div className="flex flex-col w-fit absolute right-0 top-14 rounded-lg
           p-4 bg-[#111] bg-opacity-30 backdrop-blur-lg border border-gray-500 ">
            <span className="mt-2">{user?.displayName}</span>
            <span className="mt-2">{user?.email}</span>
            <button
              onClick={handleSignOut}
              className="bg-[#E50914] px-4 py-1 rounded-md mt-2 w-24 hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
