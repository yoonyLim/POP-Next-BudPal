import {ScaleIcon} from "@/public/icons/ScaleIcon";

const AvgWeight = () => {
    return (
        <div className="bg-[#f0f0f0] p-4 mt-4 rounded-xl text-black shadow-md">
            <div className="flex items-center justify-between fill-[#fdbb2d] mb-2">
                <h1 className="font-semibold">이번달 평균 작물 무게</h1>
                <ScaleIcon />
            </div>
            <div className="flex items-end gap-2 mb-2">
                <span className="text-3xl">2.5</span>
                <span className="text-gray-400 text-xl">kg</span>
            </div>
            <div>
                <span className="text-green-500">+ 저번 달보다 0.1kg 상승</span>
            </div>
        </div>
    )
}

export default AvgWeight