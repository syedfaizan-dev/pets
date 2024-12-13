'use client'
import TokenRead from '@/components/TokenRead';
import TokenWrite from '@/components/TokenWrite';
import React from 'react';

const TokenPage = () => {
    return (
        <div className="grid grid-cols-1 gap-8 p-8">
            <TokenRead />
            <TokenWrite />
        </div>
    );
};

export default TokenPage;
