import SalesChart from "@/components/GrowthChart";
import PlantsRatioChart from "@/components/PlantsRatioChart";
import Notifications from "@/components/Notifications";
import PersonalStat from "@/components/PersonalStat";
import DeliveryInfo from "@/components/DeliveryInfo";
import LostChart from "@/components/LostChart";
import HealthStatus from "@/components/HealthStatus";
import AvgWeight from "@/components/AvgWeight";
import SavingsInfo from "@/components/SavingsInfo";

const DashboardPage = () => {
    return (
        <div className="w-full h-full flex flex-col p-4 gap-4 bg-gray-200 rounded-t-xl">
            {/* MAIN */}
            <div className="flex items-end justify-between gap-4 h-full">
                <PersonalStat />
                <div className="flex flex-col items-end px-4 text-black gap-2">
                    <div className="flex flex-col items-end">
                        <span>작물 성장률을 높이기 위해</span>
                        <span>다음 상품을 추천해요 :)</span>
                    </div>
                    <button className="bg-[#fdbb2d] p-2 rounded-md text-white cursor-pointer hover:bg-orange-400 ease-in-out duration-300">
                        <span className="font-semibold">추천상품 보러가기 →</span>
                    </button>
                </div>
                <DeliveryInfo />
                <SavingsInfo />
            </div>
            <div className="w-full flex gap-4">
                <div className="w-full lg:w-2/3 flex flex-col gap-8">
                    {/* MIDDLE CHARTS */}
                    {/* SALES CHART */}
                    <div className="w-full h-[500px]">
                        <SalesChart />
                    </div>
                    <div className="flex gap-4 flex-col lg:flex-row">
                        <div className="w-full lg:w-1/3">
                            <PlantsRatioChart />
                        </div>
                        <div className="w-full lg:w-2/3">
                            <LostChart />
                        </div>
                    </div>
                    <div className={"flex gap-t flex-col lg:flex-row"}>
                    </div>
                </div>
                {/* NOTIFICATIONS */}
                <div className="w-full lg:w-1/3">
                    <Notifications />
                    <HealthStatus />
                    <AvgWeight />
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;