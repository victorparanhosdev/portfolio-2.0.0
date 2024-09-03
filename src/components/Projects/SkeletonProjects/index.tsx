export const SkeletonProjects = () => {
    return (
        <div className="w-full flex flex-col animate-pulse">
            <div className="rounded-xl overflow-hidden flex items-center justify-center w-full h-[200px] bg-gray-300 dark:bg-gray-700">
                <div className="object-cover w-full h-full bg-gray-400 dark:bg-gray-600"></div>
            </div>

            <div className="mt-10 h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>

            <div className="mt-8 h-4 w-full bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            <div className="mt-2 h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            <div className="mt-2 h-4 w-4/6 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>

            <div className="mt-6 h-4 w-2/5 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>

            <div className="mt-4 flex flex-wrap gap-1.5 ">
                <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
                <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
                <div className="h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            </div>

            <div className="mt-auto">
                <div className="max-[330px]:grid mt-10 flex gap-4 ">
                    <div className="h-10 max-[430px]:w-full w-24 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
                    <div className="h-10 max-[430px]:w-full w-24 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
                </div>
            </div>
        </div>

    )
}