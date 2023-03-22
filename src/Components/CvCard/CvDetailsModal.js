import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import LoadingRing from '../LoadingRing';

const CvDetailsModal = ({ visible, onClose, marketIndex }) => {
    const [error, setError] = useState();
    const [marketplaces, setMarketplaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const handleOnClose = () => {
        onClose()
    }

    const getMarketPlacesData = () => {
        axios.get("/Mock/Marketplaces.json")
            .then((res) => {
                setMarketplaces(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }


    useEffect(() => {
        getMarketPlacesData();
    }, []);

    if (!visible) return null;

    console.log(marketIndex);

    return (
        <>
            {
                (isLoading && !error) ? <LoadingRing style={{ marginLeft: "50%", marginTop: "30px" }} /> :
                marketplaces?.map((marketplace, index) => {
                    if (marketplace.Name === marketIndex) {
                        return (
                            <div onClick={handleOnClose} className='fixed inset-0 bg-black/60 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded' key={index}>

                                <div className="relative w-full h-full max-w-7xl md:h-auto">
                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                {marketplace.Name}
                                            </h3>
                                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                        </div>

                                        <div className="p-6 space-y-6">
                                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                                {marketplace.Description}
                                            </p>
                                            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
                                                {marketplace.Description}
                                            </p>
                                        </div>

                                        <div className="p-6 space-y-6">
                                            {
                                                marketplace.Features?.map((freature, index) => (
                                                    <p className="text-base leading-relaxed text-black font-bold dark:text-gray-400" key={index}>
                                                        {freature}
                                                    </p>
                                                ))
                                            }

                                        </div>


                                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                            <Link to={"/enroll"} state={marketplace}>
                                                <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enrolle Now</button>
                                            </Link>
                                            <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )

                    }

                })
            }
        </>

    )
}

export default CvDetailsModal;