import { type BaseError, useAccount, useReadContracts } from 'wagmi';
import { FaExclamationCircle, FaSpinner } from 'react-icons/fa';
import { nftConfig } from '@/config/nftConfig';
import Card from '../common/Card';

export default function NFTRead() {
    const { address } = useAccount();
    const {
        data,
        error,
        isPending
    } = useReadContracts({
        contracts: [
            {
                ...nftConfig,
                functionName: 'balanceOf',
                args: [address!]
            },
            {
                ...nftConfig,
                functionName: 'totalSupply'
            }
        ]
    });
    const [balance, totalSupply] = data || []
    let content;
    if (!address) {
        content = (
            <div className="text-center text-gray-600">
                <span>Please Connect Wallet first.</span>
            </div>
        )
    }
    else if (isPending) {
        content = (
            <div className="flex items-center space-x-2 text-gray-600">
                <FaSpinner className="animate-spin" />
                <span>Loading...</span>
            </div>
        );
    } else if (error) {
        content = (
            <div className="flex items-center space-x-2 text-red-600">
                <FaExclamationCircle />
                <span>Error: {(error as BaseError).shortMessage || error?.message}</span>
            </div>
        );
    } else {
        content = (
            <div className="flex flex-col gap-2 text-gray-600">
                <span>Your Balance: {balance?.result?.toString()}</span>
                <span>Total Supply: {totalSupply?.result?.toString()}</span>
            </div>
        );
    }

    return (
        <Card>
            <h1 className='font-semibold text-2xl mb-4'>Your NFTs</h1>
            {content}
        </Card>
    )
}
