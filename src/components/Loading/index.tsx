import { InfinitySpin } from "react-loader-spinner"

export const Loading = () => {
    return (
        <div className="min-h-screen w-full bg-dark-10 flex justify-center items-center overflow-hidden">
            <div className="animate-pulse">
            <InfinitySpin
                width="200"
                color="var(--brand-color)"
            />
            </div>
        </div>
    )
}