import { Card } from "@repo/ui/card"

export const ReceivedTransactions = ({
    receivedTransactions
}: {
    receivedTransactions: {
        time: Date,
        amount: number,
        fromUserPhone: string,
    }[]
}) => {
    receivedTransactions.reverse()
    if (!receivedTransactions.length) {
        return <Card title="Received Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <div className=" m-auto">
    <Card title="Received Transactions" height="300px">
        <div className="pt-2 pb-4">
            {receivedTransactions.map(t => <div className="flex flex-row p-2 justify-between border items-center">
                <div className="text-xl font-thin">
                    To: {t.fromUserPhone}
                </div>
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
    </div>
}