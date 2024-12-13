'use client'
import { Account } from '@/components/Account';
import TokenRead from '@/components/TokenRead';
import React from 'react';

const ConnectWalletPage = () => {

  return (
    <div className="grid grid-cols-1 gap-8 p-8">
      <Account/>
      <TokenRead/>
    </div>
  );
};

export default ConnectWalletPage;
