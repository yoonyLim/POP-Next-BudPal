import Image from "next/image";
import Link from "next/link";
import {BigStoreIcon} from "@/public/icons/BigStoreIcon";

const DeliveryInfo = () => {
    return (
        <div className="flex h-full mt-2 p-4 text-black rounded-xl bg-[#f0f0f0] shadow-md">
            <div className="w-full h-full flex gap-6">
                <div className="flex flex-col items-center justify-start h-full gap-2 mt-2">
                    <span className="font-medium">다음 종자 배송까지</span>
                    <span className="text-6xl font-semibold bg-linear-to-br from-[#22c1c3] from-2% to-[#fdbb2d] bg-clip-text text-transparent">D-3</span>
                </div>
                <div className="bg-gray-200 w-[2px] h-full rounded-full"></div>
                <div className="flex flex-col items-center justify-start h-full gap-2 mt-2">
                    <span className="font-medium">도착 예정 종자</span>
                    <div className="flex items-center gap-8">
                        <div className="flex flex-col items-center">
                            <Image src="/tomato.svg" alt="" width={40} height={40} />
                            <span>토마토</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/lettuce.svg" alt="" width={40} height={40} />
                            <span>상추</span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 w-[2px] h-full rounded-full"></div>
                <div className="flex flex-col items-center justify-start h-full gap-2 pr-2">
                    <Link href="/store" className="flex flex-col items-center justify-center fill-white w-full h-full p-4 bg-linear-to-br from-[#fdbb2d] hover:from-[#22c1c3] from-2% to-[#fdbb2d] hover:to-[#fdbb2d] ease-in-out duration-300 rounded-xl text-white cursor-pointer">
                        <span className="font-semibold">추가 종자 구매</span>
                        <BigStoreIcon  />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DeliveryInfo