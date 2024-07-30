import React from 'react'
import Card from './Card'
import { SliderCard } from '../component/SliderCard'
import Motivation from '../component/Motivation'
import Galerie from '../component/Galerie'

function page() {
  return (
    <div>
        <SliderCard/>
        <Card/>
        <Motivation/>
        <Galerie/>
    </div>
  )
}

export default page