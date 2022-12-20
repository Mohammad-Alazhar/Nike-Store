import React from "react";
import { BsStarFill } from "react-icons/bs";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { setAddItemToCart } from "../../app/CartSlice";
import { useDispatch } from "react-redux";
const Item = ({ ifExist, id, color, shadow, title, text, img, btn, rating, price }) => {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };

    dispatch(setAddItemToCart(item));
  };

  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center 
       rounded-xl p-5 transition-all duraion-700 ease-in-out w-full hover:scale-105`}
      >
        <div className={`grid items-center ${ifExist ? "justify-items-start" : "justify-items-center"} `}>
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">{title}</h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">{text}</p>
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80 px-1 rounded blur-effect-theme">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            <div className="flex items-center gap-1 ">
              <BsStarFill className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1 className="text-sm font-normal md:text-sm text-slate-100 ">{rating}</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => onAddToCart()} type="button" className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-slate-200 text-sm text-black flex items-center">
              <RiShoppingBag2Fill className="icon-style text-slate-900" />
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center
        ${ifExist ? "absolute top-5 right-1" : "justify-center"}`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={`transitions-theme hover:-rotate-12 
          ${ifExist ? "h-auto w-64 lg:w-48 md:w-44 -rotat-[35deg]" : "h-36 w-64"}`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
