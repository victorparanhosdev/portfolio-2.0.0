import { ColorRing } from "react-loader-spinner"

export const Loading = () => {
    return (
        <div className="h-screen w-full bg-dark-10 flex justify-center items-center">
            <div className="overflow-hidden">
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#8e57d1', '#8e57d1', '#8e57d1', '#8e57d1', '#8e57d1']}
                />
            </div>
        </div>
    )
}

