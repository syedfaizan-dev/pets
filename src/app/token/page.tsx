'use client'
import ApproveToken from '@/components/PET/ApproveToken';
import CheckAllowance from '@/components/PET/CheckAllowance';
import TokenRead from '@/components/PET/TokenRead';
import TokenWrite from '@/components/PET/TokenWrite';
import React from 'react';

const TokenPage = () => {
    return (
        <div className="grid grid-cols-2 gap-8 p-8">
            <TokenRead />
            <TokenWrite />
            <ApproveToken/>
            <CheckAllowance/>
        </div>
    );
};

export default TokenPage;
