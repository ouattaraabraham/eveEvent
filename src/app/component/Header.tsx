"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";
import { logoEve } from "../data";
import Nav from "./Nav";
 
 
 function Header() {

    const [scrollValue, setScrollValue] = useState(false);
  let previousScrollPosition = 0;
  let currentScrollPosition = 0;

  useEffect(() => {
    window.addEventListener("scroll", function () {
      currentScrollPosition = window.pageYOffset;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        //   alert("scrol down")
        setScrollValue(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        //   alert("scrol up")
        setScrollValue(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []) 
    return (
        <>
        <div className="z-50 w-full bg-[#FFFFFF] shadow-md">
          <div className=" mx-auto px-[5%] lg:px-0 w-ful flex items-center justify-between max-w-[1140px] ">     
            <Nav />
          </div>
        </div>
        {scrollValue && (
          <div className="fixed z-50  w-full bg-[#FFFFFF] shadow-md">
            <div className=" mx-auto px-[5%] lg:px-0 w-ful flex items-center justify-between max-w-[1140px] ">
              <Nav />
            </div>
          </div>
        )}
      </>
    );
  }



  export default Header
  