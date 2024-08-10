import { ColorRing } from "react-loader-spinner"

export const Loading = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="overflow-hidden">
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#41bbff', '#41bbff', '#41bbff', '#41bbff', '#41bbff']}
                />
            </div>
        </div>
    )
}

