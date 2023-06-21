import React from 'react'

const LoadingCard = () => {
    return (
        <>
            <div className='w-full min-h-screen flex justify-center '>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
                    <div className='w-96 h-[455px] p-2 m-10  bg-gray-50 rounded-xl transform transition-all hover:translate-y-4 duration-300 shadow-lg hover:shadow-2xl' >
                        <div role="status" className="max-w-sm p-4 rounded animate-pulse md:p-6">
                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-1.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5"></div>
                            <br/>
                            <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <br/>
                            <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoadingCard;