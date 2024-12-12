"use client"
import React, { useState } from 'react';
import { Account } from './Account';
import { useAccount } from 'wagmi';
import { WalletOptions } from './WalletOptions';

const ConnectWallet = () => {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return (
    <div className='bg-blue-100 rounded-lg p-6 flex flex-row flex-wrap gap-4'>
      <WalletOptions />
    </div>
  )
};

export default ConnectWallet;
