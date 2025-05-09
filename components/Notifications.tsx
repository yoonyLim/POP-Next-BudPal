import {WarningIcon} from "@/public/icons/WarningIcon";
import {CheckIcon} from "@/public/icons/CheckIcon";

const notifications: any[] = [
    {
        type: "danger",
        title: "병충해 발생",
        description: "현재 12개의 작물에서 병충해 증상 발생",
        time: "30분 전"
    },
    {
        type: "safe",
        title: "수확 가능 상태",
        description: "현재 6개의 작물 수확 가능",
        time: "1일 전"
    }
]

const Notifications = () => {
    return (
        <div className="bg-[#f0f0f0] p-4 rounded-xl text-black shadow-md">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold">알림</h1>
                <span className="text-xs text-gray-400 cursor-pointer">View All</span>
            </div>
            {
                notifications.length > 0 ? notifications.map((item, index) => (
                    <div key={index} className={`flex w-full h-full items-center justify-between p-3 mt-4 rounded-md border-1 ${item.type == "danger" ? "bg-red-100 border-red-300 fill-red-300" : "bg-green-100 border-green-300 fill-green-300"}`}>
                        { item.type == "danger" ? <WarningIcon /> : <CheckIcon /> }
                        <div className="flex flex-col w-full items-center justify-between ml-2">
                            <div className="flex w-full justify-between mb-1">
                                <span className="font-bold text-md">{item.title}</span>
                                <span className="font-light text-gray-400 text-sm">{item.time}</span>
                            </div>
                            <span className="w-full font-medium text-gray-500">{item.description}</span>
                        </div>
                    </div>
                ))
                    :
                    <div className="flex items-center justify-center p-2">No Notifications</div>
            }
        </div>
    )
}

export default Notifications;