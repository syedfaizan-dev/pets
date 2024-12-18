import * as React from 'react'
import {
    type BaseError,
    useAccount,
    useWriteContract
} from 'wagmi'
import { nftConfig } from '@/config/nftConfig'
import Card from '../common/Card'
import Button from '../common/Button'
import Input from '../common/Input'
import { parseEther } from 'viem'
import TransactionConfirmation from '../common/TransactionConfirmation'
import Error from '../common/Error'

export default function NFTWrite() {
    const {
        data: hash,
        error,
        isPending,
        writeContract
    } = useWriteContract()

    const { address } = useAccount()
    const [amount, setAmount] = React.useState<number | ''>('')

    async function submit() {
        if (!amount || amount <= 0) {
            alert('Please enter a valid amount.')
            return
        }

        writeContract({
            ...nftConfig,
            functionName: 'mint',
            args: [amount],
            value: parseEther('0')
        })
    }

    return (
        <Card>
            <div className="space-y-4">
                <Input
                    type="number"
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    placeholder="Enter amount"
                />

                <Button
                    disabled={isPending || !address || !amount}
                    onClick={submit}
                    isLoading={isPending}
                >
                    Mint NFT
                </Button>
                <Error error={(error as BaseError)?.shortMessage || error?.message}/>
                <TransactionConfirmation hash={hash}/>
            </div>
        </Card>
    )
}
