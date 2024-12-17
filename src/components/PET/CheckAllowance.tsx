import Button from "../common/Button";
import Card from "../common/Card";
import Input from "../common/Input";
import { useReadContract } from "wagmi";
import { useEffect, useState } from "react";
import { BaseError } from "viem";
import { tokenConfig } from "@/config/tokenConfig";

const CheckAllowance = () => {
    const [owner, setOwner] = useState('');
    const [spender, setSpender] = useState('');
    const [allowance, setAllowance] = useState<string>('');
    const [fetchData, setFetchData] = useState<boolean>(false);

    const { data, isLoading, error, fetchStatus } = useReadContract({
        ...tokenConfig,
        functionName: "allowance",
        args: [owner, spender],
        query: {
            enabled: fetchData
        }
    });

    useEffect(() => {
        if (data) {
            setAllowance(data.toString());
        }
        if (fetchStatus == 'idle') {
            setFetchData(false)
        }
    }, [data, fetchStatus]);

    const submit = async () => {
        if (owner === '' || spender === '') return;
        setFetchData(true);
    };
    return (
        <Card>
            <h2 className="text-2xl font-semibold mb-4">Check Allowance</h2>
            <Input
                type="text"
                placeholder="Owner Address"
                onChange={(e) => setOwner(e.target.value)}
                value={owner}
            />
            <Input
                type="text"
                placeholder="Spender Address"
                onChange={(e) => setSpender(e.target.value)}
                value={spender}
                error={(error as BaseError)?.shortMessage || error?.message}
            />
            <Button
                disabled={isLoading || !spender || !owner}
                isLoading={isLoading}
                onClick={submit}
            >
                Check Allowance
            </Button>
            {allowance && <div className="mt-4">
                <div className="mt-3 p-2 bg-gray-100 border rounded text-gray-800">
                    <strong>Allowance: </strong> {allowance}
                </div>
            </div>}
        </Card>
    );
};

export default CheckAllowance;
