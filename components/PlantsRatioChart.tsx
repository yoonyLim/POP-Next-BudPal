"use client"

import Image from "next/image";
import {Pie, PieChart, ResponsiveContainer} from "recharts";

const data = [
    {
        "name": "토마토",
        "value": 34,
        "fill": "#6C8976",
    },
    {
        "name": "상추",
        "value": 42,
        "fill": "#ABD1B5",
    },
    {
        "name": "청경채",
        "value": 15,
        "fill": "#79B791",
    }
];

const PlantsRatioChart = () => {
    return (
        <div className="bg-[#f0f0f0] rounded-xl w-full h-full p-4 text-black shadow-md">
            <div className={"flex justify-between items-center "}>
                <h1 className={"text-lg font-semibold"}>현재 작물 비율</h1>
                <Image src="/option.svg" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="90%" height="70%">
                <PieChart>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} fill="fill" label />
                </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    {data.map((item, index) => (
                        <div key={item.name} className="flex justify-start gap-2 font-medium">
                            <span className={`text-[${item.fill}]`}>{item.name}</span>
                            <span>{item.value}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col">
                    <span className="text-xl">총합</span>
                    <span className="text-3xl font-medium">{ data.map((item) => item.value).reduce((sum, value) => sum + value, 0) }</span>
                </div>
            </div>
        </div>
    )
}

export default PlantsRatioChart;