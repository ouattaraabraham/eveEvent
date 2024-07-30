import { DATA_PAGE_SERVICE } from '@/app/data'
import ServiceEvents from '@/app/component/ServiceEvents'
import React from 'react'
import Guide from './Guide'
import Card from './Card'
// import { DATA_NAV_LINK } from '@/app/data'
import Motivation from '@/app/component/Motivation'


function getData(service :any) {
  const item = DATA_PAGE_SERVICE.find(data => data.service == service);
  if (!item) {
    throw new Error('Item not found');
  }
  return item;
}


export default function pages({ params }: { params: { service: string } }) {
  const { service } = params;
  const item = getData(service);  
  return (
    <div> 
      <Card props={item}/>
      <Motivation/>
      <Guide/>
      <ServiceEvents/>
    </div>
  )
}
