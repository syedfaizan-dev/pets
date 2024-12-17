import { BaseError, useAccount, useReadContract, useWriteContract } from "wagmi";
import Button from "../common/Button";
import Card from "../common/Card";
import Input from "../common/Input";
import { nftConfig } from "@/config/nftConfig";
import { useState, useEffect } from "react";

// GetTokenURI Component
export default function GetTokenURI() {
  const [tokenID, setTokenID] = useState<number | ''>(''); // State for Token ID input
  const [uri, setUri] = useState<string>(''); // State for fetched Token URI
  const [fetchData, setFetchData] = useState<boolean>(false); // State to trigger the fetch

  // Read contract to get Token URI, triggered by fetchData state
  const { data, isLoading, error, fetchStatus } = useReadContract({
    ...nftConfig,
    functionName: "tokenURI",
    args: tokenID !== '' ? [tokenID] : undefined, // Only pass args if tokenID is valid
    query: {
      enabled: fetchData
    } // This will only fetch if fetchData is true
  });

  // Effect hook to update URI state when data is fetched
  useEffect(() => {
    if (data) {
      setUri(data.toString()); // Update the URI state
    }
    if (fetchStatus == 'idle') {
      setFetchData(false)
    }
  }, [data, fetchStatus]); // Only run when data changes

  // Handle Submit Button Click
  const submit = async () => {
    if (tokenID === '') return; // Prevent fetching with empty input
    setFetchData(true); // Trigger the contract read
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Get Token URI</h2>
      <Input
        onChange={(e) => setTokenID(Number(e.target.value))}
        placeholder="Enter Token ID"
        type="number"
        value={tokenID}
        error={(error as unknown as BaseError)?.shortMessage || error?.message}
      />
      <Button
        disabled={isLoading || !tokenID}
        isLoading={isLoading}
        onClick={submit}
      >
        Get URI
      </Button>

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
