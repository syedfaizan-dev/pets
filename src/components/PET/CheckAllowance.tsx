import Button from "../common/Button";
import Card from "../common/Card";
import Input from "../common/Input";

const CheckAllowance = () => {
    return (
        <Card>
            <h2 className="text-2xl font-semibold mb-4">Check Allowance</h2>
            <Input
                type="text"
                placeholder="Owner Address"
            />
            <Input
                type="text"
                placeholder="Spender Address"
            />
            <Button>
                Check Allowance
            </Button>
            <div className="mt-4">
            <div className="mt-3 p-2 bg-gray-100 border rounded text-gray-800">
                <strong>Allowance: </strong> 0 PET
            </div>
            </div>
        </Card>
    );
};

export default CheckAllowance;
