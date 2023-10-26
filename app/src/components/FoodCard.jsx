import React, { useLayoutEffect, useRef } from "react";
import { BaseUrl } from "../assets/BaseUrl";
import { gsap } from "gsap";

const FoodCard = ({ name, price, description, url, type }) => {
  const boxRef = useRef();
  const imgRef = useRef();

  useLayoutEffect(() => {
    // Refs allow you to access DOM nodes
    console.log(boxRef); // { current: div.box }
    // then we can animate them like so...
    gsap.to(boxRef.current, {
      rotation: "+=-1",
    });
    gsap.to(imgRef.current, {
      rotation: "+=320",
    });
  }, []);

  return (
    <div
      ref={boxRef}
      className="FoodCard flex flex-col sm:flex-row justify-center items-center"
    >
      <img
        className="w-[8em] h-[8em] rounded-full shadow "
        src={BaseUrl + url}
        ref={imgRef}
      />
      <div className="mx-2 h-full text-center sm:text-start">
        <h2 className="text-white text-base font-semibold font-[cursive]">
          {name}
        </h2>
        <p className="text-sm mt-2 font-normal text-white font-['inter']">
          {description}
        </p>
        <div className="w-full flex justify-center sm:justify-end  mt-3 sm:mt-1 mb-2 ">
          <span className="bg-red-500 py-1 px-2 text-xs text-white rounded">{`$${price.toFixed(
            2
          )}`}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
