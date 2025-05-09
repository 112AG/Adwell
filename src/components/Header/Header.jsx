import React, { useState } from "react";
import Logo from "../../assets/ADWELL.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

function Header() {
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);

  // for showing number of added products to the cart.
  const cart = useSelector((state) => state.cart);


  function handleMenu() {
    setMenu((prevVal) => !prevVal);
  }

  function handleSearch() {
    setSearch((prevVal) => !prevVal);
  }

  return (
    <div className="py-1.5 sm:px-8 px-4 bg-gray-100 flex justify-between items-center w-full">
      <div className="h-[52px] w-[42px] flex">
        <img className="h-full w-full" src={Logo} alt="Logo" />
      </div>

      {/* Desktop View */}
      <ul className="hidden sm:flex gap-5 whitespace-nowrap">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-link"
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/offers"
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-link"
            }
          >
            Offers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/personalize"
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-link"
            }
          >
            Personalize
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trackorder"
            className={({ isActive }) =>
              isActive ? "active-link" : "nav-link"
            }
          >
            Track Order
          </NavLink>
        </li>
      </ul>

      <div className="hidden sm:flex gap-6 items-center text-[20px]">
      <i
          onClick={handleSearch}
          className="ri-search-line cursor-pointer text-xl hover:text-red-600"
        ></i>
        <div
          className={`fixed top-0 left-0 w-[100vw] h-full bg-white bg-opacity-95 flex justify-center z-20 transition-transform duration-600 ease-in-out ${
            search ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="w-full flex flex-col items-center transform transition-transform duration-500 delay-100">
            <i
              onClick={handleSearch}
              className="ri-close-large-fill cursor-pointer text-black absolute right-4 top-4 font-bold text-2xl hover:rotate-90 transition-transform duration-300"
            ></i>

            <input
              type="text"
              className="border w-[318px] border-gray-300 bg-white rounded-full mt-[218px] px-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transform transition-all duration-300 focus:scale-105"
              placeholder="Search here..."
              autoFocus
            />

            <div className="mt-4 text-gray-500">Press Enter to search</div>
          </div>
        </div>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active-cart" : "cart")}
        >
          <i className="ri-shopping-cart-2-line"></i> 
          <div className="absolute top-3 -right-3 opacity-70 bg-white h-[20px] w-[20px] rounded-full text-[14px]  text-center text-red-500 font-semibold">{cart.length}</div>
        </NavLink>
      </div>

      {/* Mobile View */}
      <div className="flex sm:hidden gap-4 items-center">
      <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active-cart" : "cart")}
        >
          <i className="ri-shopping-cart-2-line cursor-pointer text-2xl font-semibold hover:text-red-600"></i> 
          <div className="absolute top-3 -right-1 rounded-full text-[16px]  text-center text-red-500 font-semibold">{cart.length}</div>
        </NavLink>
        <i
          onClick={handleSearch}
          className="ri-search-line cursor-pointer text-2xl font-semibold hover:text-red-600"
        ></i>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-95 flex justify-center z-20 transition-transform duration-600 ease-in-out ${
            search ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="w-full max-w-md flex flex-col items-center transform transition-transform duration-500 delay-100">
            <i
              onClick={handleSearch}
              className="ri-close-large-fill cursor-pointer text-black absolute right-4 top-4 font-bold text-2xl hover:rotate-90 transition-transform duration-300"
            ></i>

            <input
              type="text"
              className="border w-[318px] border-gray-300 bg-white rounded-full mt-[218px] px-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transform transition-all duration-300 focus:scale-105"
              placeholder="Search here..."
              autoFocus
            />

            <div className="mt-4 text-gray-500">Press Enter to search</div>
          </div>
        </div>

        <i
          onClick={handleMenu}
          className="ri-menu-line font-semibold cursor-pointer hover:text-red-600 text-2xl inline sm:hidden"
        ></i>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        onClick={handleMenu}
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-10 ${
          menu ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-[100vw] bg-gray-200 shadow-lg z-20 transform transition-transform duration-600 ease-in-out ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <i
          onClick={handleMenu}
          className="ri-close-large-fill cursor-pointer text-black absolute right-4 top-4 font-bold text-2xl"
        ></i>
        <ul className="py-16 px-4 flex flex-col items-center gap-6 whitespace-nowrap">
          <li className="transform transition-transform duration-300 hover:translate-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="transform transition-transform duration-300 hover:translate-x-2">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Shop
            </NavLink>
          </li>
          <li className="transform transition-transform duration-300 hover:translate-x-2">
            <NavLink
              to="/offers"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Offers
            </NavLink>
          </li>
          <li className="transform transition-transform duration-300 hover:translate-x-2">
            <NavLink
              to="/personalize"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Personalize
            </NavLink>
          </li>
          <li className="transform transition-transform duration-300 hover:translate-x-2">
            <NavLink
              to="/trackorder"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Track Order
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;