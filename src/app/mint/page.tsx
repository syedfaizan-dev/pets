import MintForm from '@/components/MintForm';
import React from 'react';

const MintPage = () => {
  return (
    <main className="container p-4">
      <h1 className="text-3xl font-bold mb-4">Mint Your NFTs</h1>
      <p className="mb-6">Choose the number of NFTs you want to mint and get started!</p>
      <MintForm />
    </main>
  );
};

export default MintPage;
