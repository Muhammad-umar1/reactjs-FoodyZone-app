import React, { useEffect, useState } from "react";
import bgImage from "../assets/jimmy-dean-Yn0l7uwBrpw-unsplash-1.png";
import logo from "../assets/Foody-Zone.svg";

import { searchFood } from "../Redux/Slices/FoodSlice";
import { useDispatch } from "react-redux";
import PasteButton from "./DropDown";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchFood(searchTerm));
  }, [searchTerm]);

  const buttons = [
    {name:"All",type:"all"},
    {name:"Dinner",type:"dinner"},
    {name:" Lunch ",type:"lunch"},
    {name:"Breakfast",type:"breakfast"}
  ]


  return (
    <header className="text-gray-600 body-font p-3 bg-slate-900">
      <div className="">
        <div className="w-11/12 container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} alt="logo..." />
          </a>
          <div className="p-2 w-full sm:w-8/12 md:w-3/12  min-w-[7rem] bg-transparent md:ml-auto">
            <input
              type="search"
              id="search"
              name="search"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="search for food"
              className="w-full bg-transparent rounded border border-red-600 focus:border-red-950 focus:bg-gray-700 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 placeholder-white leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <nav className="md:ml-auto mt-2 mb-4 flex flex-wrap items-center text-base justify-center gap-3">
         {buttons.map((btn) => (
          <button
          key={btn.name} 
          onClick={() => [setSearchTerm(btn.type), setSelectedCategory(btn.type)]}
          className={`inline-flex items-center ${selectedCategory === btn.type ? "bg-red-700 ring-1 ring-white" : "bg-red-500" } border-0 py-1 px-3 focus:outline-none hover:bg-red-400 rounded text-base text-gray-100 mt-4 md:mt-0 `}
            >
            {btn.name}
          </button>))}
        </nav>
        {/* <PasteButton /> */}


      </div>
    </header>
  );
};

export default Navbar;
