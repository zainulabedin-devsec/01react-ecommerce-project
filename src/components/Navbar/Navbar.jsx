import React, { useState } from "react";
import Logo from "../../assets/Logo.jpg";
import { FaSearch, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { IoMdBasket } from "react-icons/io";

function Navbar({
  ScrollToProducts,
  setSearchProducts,
  navShadow,
  show,
  totalItemsInCart,
  wishList,
  setShowAuth,
  setAuthMode,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-shadow z-30 ${
        navShadow ? "shadow-2xl" : ""
      }`}
    >
      <nav className="flex flex-col md:flex-row justify-between items-center bg-white mx-auto max-w-[1300px] px-4 sm:px-8 md:px-12 h-auto md:h-20 py-4 md:py-0 relative">
        {/* Logo */}
        <a href="#" className="w-16 sm:w-20 h-16 sm:h-20 mb-2 md:mb-0">
          <img src={Logo} alt="LOGO" className="rounded-full w-full h-full" />
        </a>

        {/* Search */}
        <div className="flex items-center w-full md:w-auto justify-center mb-2 md:mb-0">
          <div className="flex border-2 border-black rounded-full h-10 w-full md:w-80">
            <input
              onChange={(e) => setSearchProducts(e.target.value)}
              onClick={ScrollToProducts}
              className="focus:outline-none w-full p-2 sm:p-4 text-black rounded-l-full"
              type="text"
              placeholder="Search..."
            />
            <button className="flex justify-center items-center p-2 sm:p-4 text-black rounded-r-full">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Hamburger icon for small screens */}
        <div className="md:hidden absolute top-6 right-4 text-3xl cursor-pointer z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Wishlist, Cart, Auth */}
        <div
          className={`flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-2xl sm:text-3xl md:text-4xl md:static absolute md:bg-transparent bg-white top-20 right-0 w-full md:w-auto transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          } md:translate-x-0 p-4 md:p-0`}
        >
          {/* Wishlist */}
          <button
            onClick={() => {
              show("wishList");
              setMenuOpen(false); // close menu after click
            }}
            className="relative cursor-pointer"
          >
            <GoHeartFill />
            {wishList.length > 0 && (
              <span className="bg-red-500 text-white flex absolute -top-2 -right-2 justify-center items-center rounded-full w-4 h-4 sm:w-5 sm:h-5 text-xs sm:text-sm border-2 border-white">
                {wishList.length}
              </span>
            )}
          </button>

          {/* Cart */}
          <button
            onClick={() => {
              show("cart");
              setMenuOpen(false); // close menu after click
            }}
            className="relative cursor-pointer"
          >
            <IoMdBasket />
            {totalItemsInCart > 0 && (
              <span className="bg-red-500 text-white flex absolute -top-2 -right-2 justify-center items-center rounded-full w-4 h-4 sm:w-5 sm:h-5 text-xs sm:text-sm border-2 border-white">
                {totalItemsInCart}
              </span>
            )}
          </button>

          {/* User/Auth */}
          <button
            onClick={() => {
              setAuthMode("login");
              setShowAuth(true);
              setMenuOpen(false); 
            }}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            <FaUserCircle title="Login / Sign Up" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
