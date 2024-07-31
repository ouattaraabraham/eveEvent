"use client"
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { AlignJustify,X,ChevronRight  } from "lucide-react";

import { useState, useEffect } from "react";
import { DATA_NAV_LINK, logoEve } from '../data';



function Nav() {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = ()=>{
    console.log("toggle menu"+isOpenMenu)
    setIsOpenMenu(prev=>!prev)
  }
  
  useEffect(()=>
    {
      window.addEventListener("scroll", function () {
        setIsOpenMenu(false)
      })
    },[])
  return (
    <>

    {/* mobile */}
      <Link className='lg:hidden' href="/" >  
        <Image className='z-30 w-[100px] py-2' src={logoEve} alt='logo eveEvent'/>  
      </Link> 
      <div className='lg:hidden '>
        <button className='z-30' onClick={toggleMenu}>
          {isOpenMenu?<X color='#D4AF37' size={25}/>:<AlignJustify color='#D4AF37' size={25}/>}
        </button>
        {isOpenMenu&&(
      
            <div className='z-20 fixed top-[90px] bg-bg shadow-md left-0 w-full h-fit py-5 text-[18px]'>
            <ul className='font-bold text-[18px] pl-[8%] mt-5'>
              {DATA_NAV_LINK.map(item=>
                <li className={`py-2 px-2 rounded-lg ${item.id !==1?"hover:bg-blue-800/10": ""}  `} key={item.id}>
                  {item.id !==1?
                  <Link className='text-[19px]' href={item.link} onClick={toggleMenu}>{item.name}</Link>:
                  (
                    <div className=''>
                      <h1 className='text-[19px]'>
                          <Link href={item.link}>
                            {item.name}
                          </Link>
                        </h1>
                      <ul className=' text-[17px] '>
                      { 
                      item.sousLink&&(item.sousLink.map(item=>
                          <li className='py-2 px-2' key={item.id} >
                            <Link className='py-2 px-2 rounded-lg hover:bg-blue-800/10' href={item.link} onClick={toggleMenu}>{item.name}</Link>
                          </li>
                        ))
                      }
                      </ul>
                  
                  </div>
                  )
                  }
                </li>
              )}
            </ul>
            </div>   
          )}   
      </div>
   
     {/* desktop */}

      <div className='hidden lg:block text-blue-950'>
          <ul className='relative text-nowrap flex items-center gap-8 font-bold text-[16px]'>
            {
              DATA_NAV_LINK.map(item=>
                <div key={item.id}>
                     {item.id !==1 && item.id !==4?
                  <li className='transition ease-in-out delay-75 border-b-2 border-t-2 py-2 border-txt-style hover:bg-txt-style' key={item.id}>
                   <Link className={`px-5 py-4`} href={item.link}>{item.name}</Link>
                  </li>
                  :item.id ==1?(
                    <div className='relative'>
                      <li className='transition ease-in-out delay-75 hover:bg-txt-style flex gap-2 items-center border-b-2 border-t-2 py-2 border-txt-style h-full px-5 peer cursor-pointer '>
                        <Link href={item.link}>{item.name}</Link>
                        <ChevronRight size={20}/>
                      </li>
                      <div  className='absolute -left-2 duration-700 invisible hidden  opacity-0 peer-hover:visible hover:visible peer-hover:block hover:block peer-hover:opacity-100 hover:opacity-100 w-fit'>
                        <ul className='w-fit text-[16px] text-nowrap px-4 py-5 bg-bg rounded-sm'>
                          {
                          item.sousLink&&(item.sousLink.map(item=>
                            <li key={item.id} className={`${item.id==3?'border-b-2':''} border-t-2 py-2 border-txt-style transition ease-in-out delay-75 hover:bg-txt-style`}>
                              <Link className='py-3 px-2 rounded-lg' href={item.link}>{item.name}</Link>
                              </li>
                          )
                          )}
                        </ul>
                      </div>
                    
                    </div>
                  ):
                  item.logo?
                  <li className='w-[150px] py-2'  key={item.id}>
                   <Link  href={item.link}>
                       <Image src={item.logo} alt='logo'/>
                   </Link>
                  </li>:""
                }
                </div>
        
              )
            }
          </ul>

      </div>
    </>
  )
}

export default Nav