const PersonalStat = () => {
    return (
        <div className="flex flex-col gap-4 h-full p-4 bg-linear-to-br from-[#22c1c3] from-2% to-[#fdbb2d] text-white rounded-xl shadow-md">
            <div className="flex items-end">
                <span className="text-3xl font-bold">유니님</span>
                <span className="text-2xl">의 작물 성장률은</span>
            </div>
            <div className="flex items-end text-2xl gap-2">
                <div className="flex gap-2 items-start">
                    <span>TOP</span>
                    <span className="text-6xl font-bold">13%</span>
                </div>
                <span className="text-6xl">👍</span>
            </div>
        </div>
    )
}

export default PersonalStat;