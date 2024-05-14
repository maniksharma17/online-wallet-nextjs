"use client"
import { useState } from "react";
import { Card } from "@repo/ui/card";
import { InputBox } from "@repo/ui/input-box";
import { Select } from "@repo/ui/select";
import { createOnRampTransaction } from "../app/lib/createOnRampTransaction";

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}, {
    name: "SBI Bank",
    redirectUrl: "https://retail.onlinesbi.sbi/retail/login.htm"
}];

export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name)
    const [amount, setAmount] = useState(0)

    return <Card title="Add Money">
        <div className="w-full">
            <InputBox label="Amount" type="number" placeholder="Enter Amount" setState={setAmount}></InputBox>
            
            <Select onSelect={(value: string)=>{
                setProvider(value)
                setRedirectUrl(SUPPORTED_BANKS.find(x => x.name===value)?.redirectUrl || "") 
            }}
            options={
                SUPPORTED_BANKS.map(x => ({
                    key: x.name,
                    value: x.name
            }))}>
            
            </Select>

            <div className="flex justify-center pt-4">
            <button onClick={() => {
                createOnRampTransaction({provider, amount})
                window.location.href = redirectUrl || "";
            }} className="py-2 px-8 rounded-full border-blue-900 border text-blue-900 font-semibold hover:bg-blue-900 hover:text-white">
            Add Money
            </button>
        </div>
        </div>
    </Card>

}