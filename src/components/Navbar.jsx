import React, { useContext, useState } from 'react';
import logo from '../assets/Logo.png';
import "../styles/Navbar.css"
import { Link } from 'react-router-dom';


const Navbar = ({currencyHandler}) => {
  // const navigate = useNavigate();
  const [isMenuOpen, setisMenuOpen] = useState(false);

     


  return (
    <header className='flex justify-between items-center text-black py-6 px-8 md:px-32  drop-shadow-md'>
      <Link to="/">
        <img src={logo} className='w-52 h-50 hover:scale-105 transition-all' alt="logo" />
      </Link>

      <ul className='hidden text-black xl:flex items-center gap-12 ml-5 font-semibold text-base'>
      <li className='p-3  hover:bg-sky-400 hover:text-white rounded-md transition-all cursor pointer'>
         <Link
            to="/sign-up"
            >
            Home
          </Link>
        </li>
        <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor pointer'>
           Cryptocurrency
        </li>
        <li id="trend" className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor pointer'>
           Portfolio
        </li>
        <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor pointer'>
           News
        </li>
      </ul>

      <div className='relative text-black left-10 flex  items-center justify-center'>
      <select onChange={currencyHandler}   >
          <option value='usd'>USD</option>
          <option value='eur'>EUR</option>
          <option value='ngn'>NGN</option>
        </select>
        <Link to="/sign-up" className=' text-black invisible sm:hidden lg:visible lg:block p-5 m-2 bg-gray-200 rounded-xl'
        >Sign Up</Link>
        <Link to="/sign-in" className='p-5 mx-auto  m-2 text-black sm:hidden lg:block bg-gray-200 rounded-xl'>Sign In</Link>
     
      </div>

      <div onClick={() => setisMenuOpen(!isMenuOpen)}>
        <i className='bx bx-menu xl:hidden block text-5xl cursor-pointer'></i>
      </div>

      <div className={`absolute xl:hidden mt-5 top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg
        transform transition-transform ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        style={{transition: 'transform 0.3s ease, opacity 0.3s ease'}}>
        <ul >
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
            CryptoCurrencies
          </li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
            Home
          </li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
            About
          </li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
            Contact
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
