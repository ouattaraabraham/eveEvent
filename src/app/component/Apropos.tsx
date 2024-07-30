import Image from 'next/image'

import { Linkedin, Instagram , TrendingUp} from 'lucide-react';

import Btn from './Btn'
import { img2, img3, img4 } from '../assets/img'
import { APROPOS_SECTION } from '../data';

function Apropos() {
  return (
    <section className='bg-bg'>
        <div className='mx-auto  w-[80%] py-[50px] lg:py-[100px] md:flex items-center justify-between'>

           <div className='md:w-[40%] pb-[30px]'>
            <div className='mb-[30px]  lg:mb-[5.82%]'>
                <h2 className='mb-[5%] text-txt-style text-[40px]'>{APROPOS_SECTION.txt1}</h2>
                <h3 className='font-Playwrite'>{APROPOS_SECTION.txt2}</h3>
            </div>

            <div className='mb-[30px]  lg:mb-[5.82%]'>
                <h3 className='pb-[2%]'>{APROPOS_SECTION.txt3} </h3>
                <h2 className='text-txt-style text-Playwrite'>{APROPOS_SECTION.txt4}</h2>
            </div>

            <div>
             <div className='flex mb-[7%]'>
                <span><Linkedin/></span>
                <span className='ml-4'><Instagram/></span>
             </div>
               <div className='font-Playwrite text-[22px] text-txt-style flex items-center gap-4'>
                <h3>{APROPOS_SECTION.txt5}</h3>
                <span><TrendingUp/></span>
               </div>
            </div>
            
           </div>

           <div className='md:w-[429px] md:h-[427px] '>
            <Image className='object-cover w-[429px] h-[427px] ' src={APROPOS_SECTION.img} alt='profile decoratrice et organisatrice evenementiel'/>
           </div>
        </div>
    </section>
  )
}

export default Apropos