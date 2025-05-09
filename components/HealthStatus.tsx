import {ShieldIcon} from "@/public/icons/ShieldIcon";

const HealthStatus = () => {
    return (
        <div className="bg-[#f0f0f0] p-4 mt-4 rounded-xl text-black shadow-md">
            <div className="flex items-center justify-between fill-[#fdbb2d] mb-2">
                <h1 className="font-semibold">작물 건강 점수</h1>
                <ShieldIcon />
            </div>
            <div className="flex items-end gap-2 mb-2">
                <span className="text-3xl">71</span>
                <span className="text-gray-400 text-xl">/100</span>
            </div>
            <div>
                <span className="text-green-500">+ 저번 달보다 16점 상승</span>
            </div>
        </div>
    )
}

export default HealthStatus