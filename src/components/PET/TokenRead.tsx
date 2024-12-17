import { type BaseError, useAccount, useReadContracts } from 'wagmi';
import { FaExclamationCircle, FaSpinner } from 'react-icons/fa';
import Card from '../common/Card';
import { tokenConfig } from '@/config/tokenConfig';

export default function TokenRead() {
    const { address } = useAccount();
    const {
        data,
        error,
        isPending
    } = useReadContracts({
        contracts: [
            {
                ...tokenConfig,
                functionName: 'balanceOf',
                args: [address!]
            },
            {
                ...tokenConfig,
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
            <h2 className="text-2xl font-semibold mb-4">PET Token</h2>
            {content}
        </Card>
    )
}
