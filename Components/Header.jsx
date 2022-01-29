import React from "react";
import CartIcon from "@heroicons/react/outline/ShoppingCartIcon";
function Header({cartSize}) {
  return (
    <div>
      <h1 className="text-blue-500 text-center font-sans font-bold uppercase text-2xl ">
        {" "}
        E-com Store
      </h1>
      <div className="bg-blue-500 flex justify-center">
        <button className="p-2  text-white hover:bg-blue-900">Clothes</button>
        <button className="p-2  text-white hover:bg-blue-900">Footwear</button>
        <button className="p-2  text-white hover:bg-blue-900">
          Electronics
        </button>
        <button className="p-2  text-white hover:bg-blue-900">
          Grocessory
        </button>
        <div className="flex justify-center items-center hover:bg-blue-900 cursor-pointer">
          <CartIcon className="h-8 w-8  text-white  " />
          <h3 className="text-white">{cartSize}</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
