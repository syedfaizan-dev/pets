import { BaseError, useAccount, useReadContract, useWriteContract } from "wagmi";
import Button from "../common/Button";
import Card from "../common/Card";
import Input from "../common/Input";
import { nftConfig } from "@/config/nftConfig";
import { useState, useEffect } from "react";
import Error from "../common/Error";

export default function GetTokenURI() {
  const [tokenID, setTokenID] = useState<number | ''>('');
  const [uri, setUri] = useState<string>('');
  const [fetchData, setFetchData] = useState<boolean>(false);

  const { data, isLoading, error, fetchStatus } = useReadContract({
    ...nftConfig,
    functionName: "tokenURI",
    args: tokenID !== '' ? [tokenID] : undefined,
    query: {
      enabled: fetchData
    }
  });

  useEffect(() => {
    if (data) {
      setUri(data.toString());
    }
    if (fetchStatus == 'idle') {
      setFetchData(false)
    }
  }, [data, fetchStatus]);

  const submit = async () => {
    if (tokenID === '') return;
    setFetchData(true);
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Get Token URI</h2>
      <Input
        onChange={(e) => setTokenID(Number(e.target.value))}
        placeholder="Enter Token ID"
        type="number"
        value={tokenID}
      />
      <Button
        disabled={isLoading || !tokenID}
        isLoading={isLoading}
        onClick={submit}
      >
        Get URI
      </Button>
      <Error error={(error as unknown as BaseError)?.shortMessage || error?.message}/>
      {uri && (
        <div className="mt-3 p-2 bg-gray-100 border rounded text-gray-800 break-words max-w-full overflow-auto">
          <strong>Token URI: </strong>
          <br />
          <a
            href={uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline break-all"
          >
            {uri}
          </a>
        </div>
      )}
    </Card>
  );
}
