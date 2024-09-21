

export const SkeletonAllProjects = () => {
    return (
        <div className="grid grid-cols-allprojects gap-4">
            {Array.from({ length: 12 }).map((_, index) => {
                return (
                    <div key={index}
                        className={`shadow-md transition-shadow duration-200 hover:shadow-[#2c96df78] dark:hover:shadow-gray-dark-200 border  p-3 flex flex-col rounded-xl dark:bg-gray-dark-100 h-[162px] dark:border-0 bg-[#f0f6ff47] border-[#2c96df78] animate-pulse`}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-5 h-5 bg-gray-300 dark:bg-gray-dark-500 rounded-full animate-pulse"></div>
                            <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-dark-500 rounded-lg animate-pulse"></div>
                        </div>
                        <div className="text-xs h-12 w-full bg-gray-300 dark:bg-gray-dark-500 rounded-lg mb-3 animate-pulse"></div>
                        <div className="flex gap-3 mt-auto">
                            <div className="h-8 w-8 bg-gray-300 dark:bg-gray-dark-500 rounded-full animate-pulse"></div>
                            <div className="h-8 w-8 bg-gray-300 dark:bg-gray-dark-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export const SkeletonTotalPages = () => {
    return (
        <div className="flex justify-end mb-4 text-blue-light-400 dark:text-gray-dark-400 animate-pulse ">
            <span className="h-6 w-20 bg-gray-300 dark:bg-gray-dark-100 rounded-lg animate-pulse"></span>
        </div>
    )
}