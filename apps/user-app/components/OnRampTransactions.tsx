import { Card } from "@repo/ui/card"

export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        // TODO: Can the type of `status` be more specific?
        status: 'Success' | 'Failure' | 'Processing',
        provider: string
    }[]
}) => {
    transactions.reverse()
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions" height="300px">
        <div className="pt-2 pb-4">
            {transactions.map(t => <div className="flex flex-row p-2 justify-between border items-center">
                <div>
                    <div className="text-sm font-thin">
                        Received INR
                    </div>
                    <div className="text-slate-600 text-xs font-extralight">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex pr-2 justify-center">
                    <p className="font-semibold">+ Rs {t.amount / 100}</p>
                </div>

            </div>)}
        </div>
    </Card>
}