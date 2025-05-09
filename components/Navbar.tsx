import Image from "next/image";
import Link from "next/link";
import {ProfileIcon} from "@/public/icons/ProfileIcon";
import {NotificationIcon} from "@/public/icons/NotificationIcon";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 text-gray-500">
            {/* LOGO */}
            <Link href="/" className="flex w-[14%] items-center justify-center lg:justify-start gap-2 cursor-pointer">
                {/*<Image src="/next.svg" alt="logo" width={32} height={32} />*/}
                <span className="hidden lg:block font-bold bg-linear-to-br from-[#22c1c3] from-2% to-[#fdbb2d] bg-clip-text text-transparent text-3xl">BudPal</span>
            </Link>
            {/* USER */}
            <div className="flex items-center justify-btween w-full h-full fill-gray-300">
                <div className="flex items-center w-full ml-8 gap-2">
                    <span className="text-3xl">👋</span>
                    <span className="font-bold text-xl">유니님, 안녕하세요!</span>
                </div>
                <div className="flex items-center justify-end w-full h-full gap-4">
                    <NotificationIcon />
                    <div className="bg-gray-300 w-[2px] h-[30px] rounded-full"></div>
                    <div className="flex items-center justify-center font-semibold gap-2">
                        <span className="text-md">유니님의 랭크</span>
                        <span className="text-2xl">👑</span>
                    </div>
                    <div className="bg-gray-300 w-[2px] h-[30px] rounded-full"></div>
                    <ProfileIcon />
                </div>
            </div>
        </div>
    )
}

export default Navbar;