"use client"
import React, { useState } from 'react';

const ConnectWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6">
      <h2 className="text-xl font-bold">Connect Your Wallet</h2>
      {isConnected ? (
        <div className="text-green-500">
          <p>Wallet connected: {account}</p>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
