import Link from 'next/link';
import { useState } from 'react'
import { ethers } from 'ethers'

const Navbar = ({walletAddress}) => {
  
  return (
    <nav className='flex flex-wrap items-center justify-between p-3 bg-teal-500'>
      <div className="logo" className="inline-flex items-center p-2 mr-4 font-serif font-bold lg:text-xl">
        <h1>AMHO</h1>
      </div>
      <Link href="/"><a>COLLECTIONS</a></Link>
      <Link href="/market"><a>E-SHOP</a></Link>
      <Link href="/"><a>{walletAddress && walletAddress.substring(0,8) + "..." + walletAddress.substring(34,42)}</a></Link>
   
    </nav>
);
}
 
export default Navbar;