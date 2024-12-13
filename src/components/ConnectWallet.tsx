"use client"
import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { modal } from '@/context';
import Link from 'next/link';
import Button from './Button';

const ConnectWallet = () => {
  const { isConnected, address } = useAccount()
  if (isConnected) return (
    <Link href='account' className='cursor-pointer bg-gray-300 px-2 rounded-lg' >{address?.substring(0, 6)}...</Link>
  )
  return (
    <div className='cursor-pointer bg-gray-300 px-2 rounded-lg' onClick={() => modal.open()}>
      Connect Wallet
    </div>
  )
};

export default ConnectWallet;
