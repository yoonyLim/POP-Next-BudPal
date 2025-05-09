import Image from 'next/image'
import Link from 'next/link'

import Sidebar from '@/components/Sidebar'
import Navbar from "@/components/Navbar";

export default function DashboardLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex flex-col overflow-y-scrolls">
            <div className="w-full P-4">
                <Navbar />
            </div>
            {/* Content */}
            <div className="w-full flex ">
                <div className="w-[14%] p-4">
                    <Sidebar />
                </div>
                <div className="w-[86%] p-4]">
                    {children}
                </div>
            </div>
        </div>
    )
}