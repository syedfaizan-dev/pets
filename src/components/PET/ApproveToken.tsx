import Button from "../common/Button";
import Card from "../common/Card";
import Input from "../common/Input";

const ApproveToken = () => {
    return (
        <Card>
            <h2 className="text-2xl font-semibold mb-4">Approve Token Spending</h2>
            <Input
                type="text"
                placeholder="Spender Address"
            />
            <Input
                type="number"
                placeholder="Token Amount"
            />
            <Button>
                Approve
            </Button>
        </Card>
    );
};

export default ApproveToken;
