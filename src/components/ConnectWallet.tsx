"use client"
import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { modal } from '@/context';
import Link from 'next/link';

const ConnectWallet = () => {
  const { isConnected, address } = useAccount()
  if (isConnected) return (
    <Link href='account'>{address?.substring(0,6)}...</Link>
  )
  return (
    <button onClick={() => modal.open()}>
      Connect Wallet
    </button>
  )
};

export default ConnectWallet;
