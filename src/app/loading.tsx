import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading () {
    return (
        <div className="min-h-screen w-full dark:bg-gray-dark-500 bg-white flex justify-center items-center">
            <div className="overflow-hidden">
              <AiOutlineLoading3Quarters className="animate-spin text-5xl  text-blue-light-200 dark:text-blue-dark-100"/>
            </div>
        </div>
    )
}

