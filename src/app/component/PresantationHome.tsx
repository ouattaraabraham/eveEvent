import React from 'react'
import Image from 'next/image'
import { img2, img3, img4 } from '../assets/img'
import Btn from './Btn'
import { PRESANTATION_HOME } from '../data'
 function PresantationHome() {
  return (
    <section className='bg-white'>
        <div className='py-[50px] lg:py-[100px] w-[90%] sm:w-[80%] mx-auto max-w-[1080px] lg:flex'>
           <div className='lg:w-[47%] pb-[30px] lg:pb-0 mb-[30px] lg:mb-0 lg:mr-[5.5%]'>
                 <h3 className='tracking-[2px] text-txt-style text-[28px] font-Playwrite mb-[30px] lg:mb-[8%]'>{PRESANTATION_HOME.h3}</h3>
                 <h4 className='pb-[2%] leading-[1em] text-gd-txt text-[18px] lg:text-[22px] mb-[30px] lg:mb-[5.82%]'>{PRESANTATION_HOME.h4}</h4>
               <div>
                {PRESANTATION_HOME.service.map((item,index)=>
                <p key={index} className='pb-[1em]'>{item}</p>
                )}
               </div>
               <div>
                <Btn/>  
               </div>     
           </div>

           <div className='lg:w-[47%]'>
              <Image className='w-full' src={img4} alt='decoratrice' />
           </div>
        </div>
    </section>
  )
}


export default PresantationHome