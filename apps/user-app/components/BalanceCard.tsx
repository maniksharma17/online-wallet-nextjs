import { Card } from "@repo/ui/card";

export const BalanceCard = ({amount, locked}: {
    amount: number;
    locked: number;
}) => {
    return <Card title={"Balance"}>
        <div className="flex justify-between border-b border-slate-300 pb-2">
            <div className="font-light">
                Unlocked balance
            </div>
            <div className="font-semibold">
                {amount / 100} INR
            </div>
        </div>
        <div className="flex justify-between border-b border-slate-300 py-2">
            <div className="font-light">
                Locked Balance
            </div>
            <div className="font-semibold">
                {locked / 100} INR
            </div>
        </div>
        <div className="flex justify-between border-slate-300 py-2">
            <div className="font-semibold">
                Total Balance
            </div>
            <div className="font-semibold">
                {(locked + amount) / 100} INR
            </div>
        </div>
    </Card>
}