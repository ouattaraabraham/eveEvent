'use client'

import Link from "next/link";
export default function error({error,reset}:
    {error:Error;reset:()=>void}) {
  return (
      <div className="h-[40vh] py-[50px]">
        <div className="w-fit mx-auto flex gap-4 items-center">
            <span>Page non trouver</span>
            <Link href="/">
            <button className=" px-4 py-2 border-2 rounded-xl">retour</button>
            </Link>        
        </div>          
     </div>
  )
}
