import React from 'react';

const MintForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <label className="block">
        <span className="text-gray-700">Amount</span>
        <input
          type="number"
          className="border border-gray-300 p-2 mt-1 rounded w-full"
          min="1"
          max="50"
          placeholder="Enter amount (1-50)"
        />
      </label>
      <button className="bg-gray-500 text-white py-2 px-4 rounded">
        Mint Now
      </button>
    </form>
  );
};

export default MintForm;
