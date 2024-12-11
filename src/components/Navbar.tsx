import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 text-black p-2">
      <div className="container mx-auto flex justify-between">
      <Link href="/" className='text-xl font-bold'>Pets</Link>
      <div className="flex gap-5">
          <Link href="/mint">Mint</Link>
          <Link href="/connect-wallet">Connect Wallet</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
