import { Skeleton } from "@/components/Skeleton"

export const SkeletonAllProjects = () => {
    return (
        <div className="grid grid-cols-allprojects gap-4">
            {Array.from({ length: 30 }).map((_, index) => {
                return (
                    <div key={index} className=" dark:hover:shadow-gray-dark-200 p-3 flex flex-col border dark:border-0 rounded-xl dark:bg-gray-dark-100 min-h-[120px] bg-[#f0f6ff47] space-y-3">
                        <div className="flex items-center gap-3">
                            <Skeleton className="min-w-5 h-5 rounded-md" />
                            <Skeleton className="h-7 w-full rounded-md" />
                        </div>
                        <Skeleton className="h-8 w-full  rounded-md" />
                        <div className="flex gap-3 mt-auto">
                            <Skeleton className="h-9 w-9 rounded-full" />
                            <Skeleton className="h-9 w-9 rounded-full" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}