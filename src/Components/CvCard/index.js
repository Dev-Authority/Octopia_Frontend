import { React } from 'react'
import casino from '../../Assets/images/casino_fr.png'
import carethy from '../../Assets/images/carethy.png'
import cdon from '../../Assets/images/cdon.png'
import europazon from '../../Assets/images/europazon.png'

const CvCard = () => {
    return (
        <>
            <div className='bg-gray-200 w-full min-h-screen flex justify-center items-center'>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
                    <div className='w-96 p-2 m-10  bg-white rounded-xl transform transition-all hover:translate-y-4 duration-300 shadow-lg hover:shadow-2xl'>
                        {/* image */}
                        <img className='h-40 object-cover rounded-xl' alt="logo" src={casino} />
                        <div className='p-2'>
                            <h2 className='font-bold text-lg'>Casino.fr</h2>
                            <p className='text-sm text-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <div className='m-2'>
                            <button className='text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-800'>Learn More</button>
                        </div>
                    </div>
                    <div className='w-96 p-2 m-10 bg-white rounded-xl transform transition-all hover:translate-y-4 duration-300 shadow-lg hover:shadow-2xl'>
                        {/* image */}
                        <img className='h-40 object-cover rounded-xl' alt="logo" src={carethy} />
                        <div className='p-2'>
                            <h2 className='font-bold text-lg'>Carethy</h2>
                            <p className='text-sm text-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <div className='m-2'>
                            <button className='text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-800'>Learn More</button>
                        </div>
                    </div>
                    <div className='w-96 p-2 m-10 bg-white rounded-xl transform transition-all hover:translate-y-4 duration-300 shadow-lg hover:shadow-2xl'>
                        {/* image */}
                        <img className='h-40 object-cover rounded-xl' alt="logo" src={cdon} />
                        <div className='p-2'>
                            <h2 className='font-bold text-lg'>CDON</h2>
                            <p className='text-sm text-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <div className='m-2'>
                            <button className='text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-800'>Learn More</button>
                        </div>
                    </div>
                    <div className='w-96 p-2 m-10 bg-white rounded-xl transform transition-all hover:translate-y-4 duration-300 shadow-lg hover:shadow-2xl'>
                        {/* image */}
                        <img className='h-40 object-cover rounded-xl' alt="logo" src={europazon} />
                        <div className='p-2'>
                            <h2 className='font-bold text-lg'>Europazon</h2>
                            <p className='text-sm text-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <div className='m-2'>
                            <button className='text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-800'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CvCard;
