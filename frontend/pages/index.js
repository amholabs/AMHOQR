import Head from 'next/head'
import User from '../components/User'
import { useState } from 'react'
import { ethers } from 'ethers'


export default function Home({setWalletAddress, walletAddress}) {
  //const [walletAddress, setWalletAddress] = useState();

  const login = async () => {
     if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0])
      }
}
  
  return (
    <div>
    <br></br>
    <br></br>
 <div class="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
  <h2 class="font-semibold text-3xl mb-5">WELCOME</h2>

      <br></br>
      <br></br>
      {!walletAddress ? <button onClick={login} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Connect to METAMASK     
                        </button> :
      <div>
         <User /> 
      <p>ITEMS OWNED</p>
      </div>}
    </div>
 

      <br></br>    
      <br></br>     
    </div>
  )
}
