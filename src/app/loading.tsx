import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading () {
    return (
        <div className="h-screen w-full dark:bg-gray-dark-500 bg-white flex justify-center items-center">
            <div className="overflow-hidden">
              <AiOutlineLoading3Quarters className="animate-spin text-4xl md:text-5xl lg:text-7xl text-blue-light-200 dark:text-blue-dark-100"/>
            </div>
        </div>
    )
}

