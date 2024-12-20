import * as React from "react";
import { type BaseError, useAccount, useWriteContract } from "wagmi";
import { tokenConfig } from "@/config/tokenConfig";
import { parseUnits } from "viem";
import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";
import TransactionConfirmation from "../common/TransactionConfirmation";
import Error from "../common/Error";

const ApproveToken = () => {
    const { address } = useAccount();

    const [spender, setSpender] = React.useState<string>("");
    const [amount, setAmount] = React.useState<string>("");

    const {
        data: hash,
        error,
        isPending,
        writeContract,
    } = useWriteContract();

    async function submit() {
        if (!spender || !amount) {
            alert("Please enter both spender address and token amount.");
            return;
        }

        try {
            writeContract({
                ...tokenConfig,
                functionName: "approve",
                args: [spender, parseUnits(amount, 8)],
            });
        } catch (error) {
            console.error("Error during approve transaction:", error);
        }
    }

    return (
        <Card>
            <h2 className="text-2xl font-semibold mb-4">Approve Token Spending</h2>

            <Input
                type="text"
                placeholder="Spender Address"
                value={spender}
                onChange={(e) => setSpender(e.target.value)}
            />

            <Input
                type="number"
                placeholder="Token Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
            />
            <Button
                disabled={isPending || !address || !spender || !amount}
                onClick={submit}
                isLoading={isPending}
            >
                Approve
            </Button>
            <Error error={(error as BaseError)?.shortMessage || error?.message}/>
            <TransactionConfirmation hash={hash}/>
        </Card>
    );
};

export default ApproveToken;
