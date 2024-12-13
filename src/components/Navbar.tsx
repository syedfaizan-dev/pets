import React from 'react';
import Link from 'next/link';
import ConnectWallet from './ConnectWallet';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 text-black p-2">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className='text-xl font-bold'>Pets</Link>
        <div className="flex gap-5">
          <Link href="/token">Token</Link>
          <ConnectWallet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
