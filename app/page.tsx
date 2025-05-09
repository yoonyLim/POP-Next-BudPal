import Image from "next/image";
import {BigStoreIcon} from "@/public/icons/BigStoreIcon";
import Link from "next/link";
import {DashboardIcon} from "@/public/icons/DashboardIcon";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="flex w-full justify-between">
              <span className="text-gray-400 text-6xl font-bold">Welcome to</span>
              <Link href="/dashboard" className="flex items-center justify-center fill-white h-full p-4 bg-linear-to-br from-[#fdbb2d] hover:from-[#22c1c3] from-2% to-[#fdbb2d] hover:to-[#fdbb2d] ease-in-out duration-300 rounded-xl text-white cursor-pointer gap-2">
                  <span className="font-semibold">대시보드로 이동</span>
                  <DashboardIcon />
              </Link>
          </div>
          <span className=" font-bold bg-linear-to-br from-[#22c1c3] from-2% to-[#fdbb2d] bg-clip-text text-transparent text-[300px]">BudPal</span>
      </main>
    </div>
  );
}
