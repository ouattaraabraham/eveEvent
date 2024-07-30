import React from 'react'
import Image from 'next/image'
import { galerie } from '../assets/img'
export default function Galerie() {
  return (
    <div >
         <Image className='mx-auto' src={galerie} alt=''/>
    </div>
  )
}
