import { tokenConfig } from '@/config/tokenConfig'
import * as React from 'react'
import {
    useAccount,
    useWaitForTransactionReceipt,
    useWriteContract
} from 'wagmi'
import Card from '../common/Card'
import Button from '../common/Button'
import { parseEther } from 'viem'
import TransactionConfirmation from '../common/TransactionConfirmation'

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
            <TransactionConfirmation hash={hash}/>
        </Card>
    )
}