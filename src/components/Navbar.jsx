import React, { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "./../app/CartSlice";
const Navbar = () => {
  const [navstate, setNavstate] = useState(false);
  const totalQTY = useSelector(selectTotalQTY);
  const dispatch = useDispatch();
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  const onNavScroll = () => {
    window.scrollY > 30 ? setNavstate(true) : setNavstate(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header className={!navstate ? "absolute top-7 left-0 right-0 opacity-100 z-50" : "fixed top-0 left-0 right-0 h-[9vh] blur-effect-theme z-[200] opacity-100 flex items-center justify-center"}>
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img src={logo} alt="logo/img" className={`w-16 h-auto ${navstate && "filter brightness-0"}`} />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <AiOutlineSearch className={`icon-style ${navstate && "text-slate-900"}`} />
            </li>
            <li className="grid items-center">
              <AiOutlineHeart className={`icon-style ${navstate && "text-slate-900"}`} />
            </li>
            <li className="grid items-center">
              <button onClick={onCartToggle} type="button" className="border-none outline-none active:scale-110 transition-all duration-300 relative">
                <AiOutlineShoppingCart className={`icon-style ${navstate && "text-slate-900"}`} />
                <div
                  className={`absolute top-3 right-0 bg-white text-slate-900 shadow shadow-slate-100 w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navstate && "text-slate-900 bg-slate-100 shadow-slate-900"
                  } `}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
