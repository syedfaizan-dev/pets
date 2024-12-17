import { tokenConfig } from '@/config/tokenConfig'
import * as React from 'react'
import {
    type BaseError,
    useAccount,
    useWaitForTransactionReceipt,
    useWriteContract
} from 'wagmi'
import Card from '../common/Card'
import Button from '../common/Button'
import { parseEther } from 'viem'

export default function TokenWrite() {
    const {
        data: hash,
        error,
        isPending,
        writeContract
    } = useWriteContract()
    const { address } = useAccount();

    async function submit() {
        writeContract({
            ...tokenConfig,
            functionName: 'buyToken',
            args: [],
            value: parseEther("0.000000000000000001")
        })
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({hash})

    return (
        <Card>
            <h2 className="text-2xl font-semibold mb-4">Buy PET Token</h2>
            <Button
                disabled={isPending || !address}
                onClick={submit}
                isLoading={isPending}
            >
                Buy Token
            </Button>
            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div className='text-gray-600'>Waiting for confirmation...</div>}
            {isConfirmed && <div className='text-green-600'>Transaction confirmed.</div>}
            {error && (
                <div className='text-red-600'>{(error as BaseError).shortMessage || error.message}</div>
            )}
        </Card>
    )
}