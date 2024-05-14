import { Card } from "@repo/ui/card"

export const SentTransactions = ({
    sentTransactions
}: {
    sentTransactions: {
        time: Date,
        amount: number,
        toUserPhone: string,
    }[]
}) => {
    sentTransactions.reverse()
    if (!sentTransactions.length) {
        return <Card title="Sent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <div className=" m-auto">
    <Card title="Sent Transactions" height="300px">
        <div className="pt-2 pb-4">
            {sentTransactions.map(t => <div className="flex flex-row p-2 justify-between border items-center">
                <div className="text-xl font-thin">
                    To: {t.toUserPhone}
                </div>
                <div>
                    <div className="text-sm font-thin">
                        Sent INR
                    </div>
                    <div className="text-slate-600 text-xs font-extralight">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex pr-2 justify-center">
                    <p className="font-semibold">- Rs {t.amount / 100}</p>
                </div>

            </div>)}
        </div>
    </Card>
    </div>
}