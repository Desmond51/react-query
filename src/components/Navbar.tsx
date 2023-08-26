import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
 const router = useRouter()
  return (
    <div>
       <div className='flex gap-3 md:gap-5 bg-blue-600 w-full'>
                <Link href= "/" className='black_btn' onClick={()=> router.push("/Home")}>
                  Home
                </Link>
                
                <Link href="/superheroespage/page" >xtraditional Super Heroes Page</Link>
               
 
                <Link href="/rqsuperheroespage/page" className="flex gap-2 flex-center">RQ Super Heroes Page</Link>
                <Link href="/testpage/page" className='flex gap-2 flex-center'>Testing</Link>
              </div>
    </div>
  )
}

export default Navbar