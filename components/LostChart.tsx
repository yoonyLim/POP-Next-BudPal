"use client"

import Image from "next/image";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const data = [
    {
        month: "1월",
        alive: 100,
        damaged: 8,
        withered: 0
    },
    {
        month: "2월",
        alive: 97,
        damaged: 5,
        withered: 3
    },
    {
        month: "3월",
        alive: 92,
        damaged: 10,
        withered: 5
    },
    {
        month: "4월",
        alive: 82,
        damaged: 11,
        withered: 6
    },
    {
        month: "5월",
        alive: 91,
        damaged: 12,
        withered: 8
    }
]

const LostChart = () => {
    return (
        <div className="bg-[#f0f0f0] rounded-xl w-full h-full p-4 text-black flex flex-col gap-4 shadow-md">
            <div className={"flex justify-between items-center"}>
                <h1 className={"text-lg font-semibold"}>연간 작물 상태</h1>
                <Image src="/option.svg" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="90%" height="90%">
                <AreaChart width={730} height={250} data={data}
                           margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorAlive" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorDamaged" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FFA500" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#FFA500" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorWithered" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" tickLine={false} />
                    <YAxis tickLine={false} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="alive" stroke="#82ca9d" fillOpacity={1} fill="url(#colorAlive)" name="생존" />
                    <Area type="monotone" dataKey="damaged" stroke="#FFA500" fillOpacity={1} fill="url(#colorDamaged)" name="병충해" />
                    <Area type="monotone" dataKey="withered" stroke="#8884d8" fillOpacity={1} fill="url(#colorWithered)" name="손실" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LostChart