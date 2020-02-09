import React from 'react';
import { Link } from 'gatsby';
import logo from "../assets/Logo1.png"
const Header = ({ children }) => {
  const style = { color: '#FC6161' }

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 border-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img width="100" height="100" src={logo} alt="lnCode" />
      </div>
      { /*<div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>*/}
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link to="/Inicio" style={style} className=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            INICIO
        </Link>
          <Link to="/Potifolio" style={style} className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">
            POTIFOLIO
        </Link>
          <Link to="/Docs" style={style} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            DOCS
        </Link>
        </div>
      </div>
    </nav>
  )
}
export default Header
