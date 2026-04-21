import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
  console.log(props);
  // const [showLoginButton, setShowLoginButton] = useState(true);
  // if (props.page === 'login') {
  //   setShowLoginButton(false);
  // }

  const showLoginButton = props.page;
  console.log(showLoginButton);

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-full px-20 py-3 flex justify-between items-center">
      <img
        className="w-48"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-16/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="text-white ">
        <select className="mr-4 px-2 rounded-md py-1 bg-gray-700 opacity-80">
          <option>English</option>
          <option>Hindi</option>
        </select>
        {showLoginButton != "login" && (
          <button className="bg-[#E50914] px-4 py-1 rounded-md">
            <Link to='/login'>Sign In</Link>
          </button>
        )}
      </div>
    </div>
  );
}

export default Header