'use client'
import { Account } from '@/components/Account';
import React from 'react';

const ConnectWalletPage = () => {

  return (
    <div className="grid grid-cols-1 gap-8 p-8">
      <Account/>
    </div>
  );
};

export default ConnectWalletPage;
