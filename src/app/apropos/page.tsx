import React from 'react'
import Image from 'next/image'
import {TrendingUp} from 'lucide-react';

import { img4 } from '../assets/img'
import Service from '../component/Service'
import Galerie from '../component/Galerie';
import CardApropos from './CardApropos';


export default function apropos() {
  return (
    <div>
       <CardApropos/>
       <Service/>
       <Galerie/>

    </div>
  )
}
