'use client'
import GetTokenURI from '@/components/PNFT/GetTokenURI';
import NFTRead from '@/components/PNFT/NFTRead';
import NFTWrite from '@/components/PNFT/NFTWrite';
import UpdateTokenURI from '@/components/PNFT/UpdateTokenURI';
import React from 'react';

const NFTPage = () => {

  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      <NFTRead/>
      <NFTWrite/>
      <UpdateTokenURI/>
      <GetTokenURI/>
    </div>
  );
};

export default NFTPage;
