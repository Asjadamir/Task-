import React from 'react'
import Users from "../components/userList"
import Head from 'next/head.js';
import Nav from '../components/navbar';

const index = () => {
  return (
    <>
     <Head>
       
     </Head>
      <Nav/>
      <Users />
    </>
  )
}

export default index