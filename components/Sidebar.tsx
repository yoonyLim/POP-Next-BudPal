"use client"

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {DashboardIcon} from "@/public/icons/DashboardIcon";
import {StoreIcon} from "@/public/icons/StoreIcon";
import {MenuIcon} from "@/public/icons/MenuIcon";
import {SettingIcon} from "@/public/icons/SettingIcon";

const sidebarMenus = [
    {
        title: "MENU",
        icon: <MenuIcon />,
        pages: [
            {
                icon: <DashboardIcon />,
                label: "대시보드",
                href: "/dashboard"
            },
            {
                icon: <StoreIcon />,
                label: "주문내역",
                href: "/store"
            }
        ]
    },
    {
        title: "SETTINGS",
        icon: <SettingIcon />,
        pages: []
    }
]

const Sidebar = () => {
    const pathname = usePathname().substring(1);

    return (
        <div className="mt-4 text-sm text-black">
            {sidebarMenus.map((menu, index) => (
                <div key={index} className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center gap-4 fill-gray-400 text-gray-400">
                        <span className="hidden lg:block font-light">{menu.title}</span>
                    </div>
                    {menu.pages.map((page, index) => (
                        <Link href={page.href} key={index}
                              className={`flex items-center gap-4 justify-center lg:justify-start p-2 text-black rounded-xl ease-in-out duration-300 ${(pathname == "dashboard" && index == 0) || (pathname == "store" && index == 1) && (page.label != "설정") ? "bg-linear-to-br from-[#22c1c3] from-2% to-[#fdbb2d] text-white fill-white" : "hover:bg-gray-300 hover:fill-white hover:text-white"}`}
                        >
                            {page.icon}
                            <span className={"hidden lg:block"}>{page.label}</span>
                        </Link>
                    ))}
                </div>
            ))}
            <Link href="/settings"
                  className="flex items-center gap-4 justify-center lg:justify-start mt-2 p-2 text-black rounded-xl ease-in-out duration-300 hover:bg-gray-300 hover:fill-white hover:text-white"
            >
                <SettingIcon />
                <span className={"hidden lg:block"}>설정</span>
            </Link>
        </div>
    )
}

export default Sidebar;