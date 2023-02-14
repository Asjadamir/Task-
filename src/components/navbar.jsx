import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className='flex justify-center w-screen border-b-2'>
        <nav className='flex justify-between items-center w-11/12 py-2'>
        <div className="logo"><h1 className='text-green-600 leading-1 font-semibold text-2xl'>Logo</h1></div>
            <div className='flex px-3'>

                <Link className='mx-2 font-bold' href={"/"}>Agents</Link>
                <Link className='mx-2 font-bold' href={"/Architects"}>Architects</Link>
                <Link className='mx-2 font-bold' href={"/Builders"}>Builders</Link>
                <Link className='mx-2 font-bold' href={"/Legals"}>Legals</Link>
                <Link className='mx-2 font-bold' href={"/Inspection"}>Inspection</Link>
                <Link className='mx-2 font-bold' href={"/Survey"}>Survey</Link>
            </div>
            <div className='forms'>

                <Link className="text-green-600 font-bold"  href={"/signUp"}>Register</Link>
                <Link href={"/signIn"} className='text-white bg-green-600 ml-4 rounded-xl py-1 px-3'>Sign In</Link>
            </div>
        </nav>
    </div>
  )
}

export default navbar