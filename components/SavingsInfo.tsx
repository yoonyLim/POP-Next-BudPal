import {SaleIcon} from "@/public/icons/SaleIcon";

const SavingsInfo = () => {
    return (
        <div className="flex items-center justify-center h-full mt-2 p-4 text-black rounded-xl bg-[#f0f0f0] shadow-md gap-2">
            <div className="flex flex-col items-start justify-center">
                <span>이번달 시중가보다</span>
                <span className="text-4xl font-semibold bg-linear-to-br from-[#22c1c3] from-2% to-[#fdbb2d] bg-clip-text text-transparent">18,256원</span>
                <span>을 절약했어요!</span>
            </div>
            <div className="h-full fill-[#fdbb2d]">
                <SaleIcon />
            </div>
        </div>
    )
}

export default SavingsInfo