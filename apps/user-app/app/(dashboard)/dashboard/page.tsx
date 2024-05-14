
import { Card } from "@repo/ui/card";
import { getBalance } from "../transfer/page";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";



export default async function Dashboard(){
    const session = await getServerSession(authOptions)
    const balance = await getBalance()
    const userData: any = session.user
    return <div className="m-auto w-1/2 mt-28">
        <Card title="Dashboard">
            <div className="flex flex-row justify-between px-5 border-b py-2">
                <div className="font-thin text-lg">Name</div>
                <div className="text-lg">{userData?.name}</div>
            </div>

            <div className="flex flex-row justify-between px-5 border-b py-2">
                <div className="font-thin text-lg">Email</div>
                <div className="text-lg">{userData?.email}</div>
            </div>

            <div className="flex flex-row justify-between px-5 border-b py-2">
                <div className="font-thin text-lg">Phone</div>
                <div className="text-lg">{userData?.phone}</div>
            </div>

            <div className="flex flex-row justify-between px-5 border-b py-2">
                <div className="font-thin text-lg">Total Balance</div>
                <div className="text-lg">INR {balance.amount/100}</div>
            </div>

        </Card>
    </div>
}