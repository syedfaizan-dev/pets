import * as React from 'react'
import {
    type BaseError,
    useAccount,
    useTransaction,
    useTransactionReceipt,
    useWaitForTransactionReceipt,
    useWriteContract
} from 'wagmi'
import { nftConfig } from '@/config/nftConfig'
import Card from '../common/Card'
import Button from '../common/Button'
import Input from '../common/Input'
import { parseEther } from 'viem'

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

    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })

    return (
        <Card>
            <div className="space-y-4">
                <Input
                    type="number"
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    placeholder="Enter amount"
                    error={(error as BaseError)?.shortMessage || error?.message}
                />

                <Button
                    disabled={isPending || !address || !amount}
                    onClick={submit}
                    isLoading={isPending}
                >
                    Mint NFT
                </Button>

                {hash && (
                    <div className="mt-3 p-2 bg-gray-100 border rounded text-gray-800 break-words max-w-full overflow-auto">
                        <strong>Transaction Hash: </strong> {hash}
                        {isConfirming && (
                            <div className="text-gray-600">Waiting for confirmation...</div>
                        )}
                        {isConfirmed && (
                            <div className="text-green-600">Transaction confirmed.</div>
                        )}
                    </div>
                )}
            </div>
        </Card>
    )
}
