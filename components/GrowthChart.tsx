"use client"

import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {GoogleGenAI} from "@google/genai";
import {useState} from "react";
import {LightbulbIcon} from "@/public/icons/LightbulbIcon";

const data = [
    {
        month: "1월",
        last: 5,
        this: 6
    },
    {
        month: "2월",
        last: 12,
        this: 14
    },
    {
        month: "3월",
        last: 25,
        this: 28
    },
    {
        month: "4월",
        last: 38,
        this: 44
    },
    {
        month: "5월",
        last: 45,
        this: 52
    }
]

const ai = new GoogleGenAI({ apiKey: "AIzaSyBofRZgvV3aMqUrYLuis8sg3cNiVgNPuHQ" });

const lastYearAvg = (data.map((item) => item.last)).reduce((sum, value) => sum + value, 0) / data.length;
const thisYearAvg = (data.map((item) => item.this)).reduce((sum, value) => sum + value, 0) / data.length;

const GrowthChart = () => {
    const [advice, setAdvice] = useState<string | undefined>("")
    const [loading, setLoading] = useState(false);

    const getAdvice = async () => {
        setLoading(true);

        try {
            const res = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: `작년 작물 성장률 평균은 ${lastYearAvg}%이고 이번 연도 작물 성장률 평균은 ${thisYearAvg}%이야. 둘을 비교하고, 어떻게 작물 성장률을 높일 수 있는지 설명해줘.`,
                config: {
                    systemInstruction: "농사에 대한 지식이 없는 사람에게 설명하듯 친절히 설명해줘. 대신 한국어로 된 최대 두 개의 문장이여야 해."
                }
            });

            setAdvice(res.text)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }

    return (
         <div className="bg-[#f0f0f0] rounded-xl w-full h-full p-4 text-black flex flex-col gap-4 shadow-md">
             <div className={"flex justify-between items-center"}>
                 <h1 className={"text-lg font-semibold"}>작년 대비 작물 성장률</h1>
                 <div className="flex gap-4">
                     <span className="bg-[#A9C7AC] text-white p-1 rounded-sm">작년 평균 {lastYearAvg}%</span>
                     <span className="bg-[#82AC85] text-white p-1 rounded-sm">올해 평균 {thisYearAvg}%</span>
                 </div>
             </div>
             {/* LINE CHART */}
             <ResponsiveContainer width="90%" height={advice ? "75%" : "80%"}>
                 <BarChart width={730} height={250} data={data}>
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="month" axisLine={false} tickLine={false} />
                     <YAxis axisLine={false} tickLine={false} />
                     <Tooltip />
                     <Legend />
                     <Bar dataKey="last" fill="#A9C7AC" name="작년" />
                     <Bar dataKey="this" fill="#82AC85" name="올해" />
                 </BarChart>
             </ResponsiveContainer>
             {advice ? (
                 <div className="flex w-full gap-4">
                     <div className="flex w-[30%] items-center">
                         <span className="flex rounded-md bg-linear-to-br font-semibold from-[#22c1c3] from-2% to-[#fdbb2d] text-white p-2">BudPal AI의 조언</span>
                     </div>
                     <span className="font-medium">{ advice }</span>
                 </div>
             ) : (
                 <button onClick={getAdvice} className="flex items-center justify-center p-2 rounded-md text-white font-semibold cursor-pointer bg-[#fdbb2d] hover:bg-orange-400 ease-in-out duration-300">
                 <span className="flex gap-2 fill-white">
                     {!loading && <LightbulbIcon />}
                     {loading ? "생각 중..." : "BudPal AI에게 조언 구하기"}
                 </span>
                 </button>
             )}
         </div>
    )
}

async function getCrops() {
    const res = await fetch("http://localhost:3000/api/crops");
    const names = await res.json();

    console.log(names.map((name: { name: string; }) => name.name));
    const key = process.env.GENAI_API_KEY
    console.log(key)
}

export default GrowthChart;