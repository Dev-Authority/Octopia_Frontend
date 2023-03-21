import { React, useEffect, useState } from 'react'
// import { apiURL } from '../../Assets/util/api'
import axios from 'axios'
import CvDetailsModal from './CvDetailsModal';

const CvCard = (props) => {

    const [error, setError] = useState();
    const [marketplaces, setMarketplaces] = useState([]);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [CVIndex, setCVIndex] = useState();

    var canauxVente = [];
    var canauxVenteFilter = [];

    // const getMarketPlacesData = () => {
    //     axios.get("/Mock/Marketplaces.json")
    //         .then((res) => setMarketplaces(res.data.Marketplaces))
    //         .catch((err) => setError(err.message));
    // }

    const handleOnClose = () => {
        setShowDetailModal(false);
    }

    const getMarketPlacesDataByStatus = () => {
        axios.get("/Mock/Marketplaces.json").then((res) =>{
            canauxVente = res.data.Marketplaces;
            if (props.tag === "All Marketplaces"){
                setMarketplaces(res.data.Marketplaces);
            }else{
                canauxVente?.map(marketplace => {
                    if(marketplace.status === props.tag){
                        canauxVenteFilter=[...canauxVenteFilter, marketplace];
                    }
                })
                setMarketplaces(canauxVenteFilter)  
            }
            if(props.tag === "Favorites"){
                canauxVenteFilter = [];
                canauxVente?.map(marketplace => {
                    console.log(marketplace.isFavorite === true);
                    if(marketplace.isFavorite === true){
                        canauxVenteFilter=[...canauxVenteFilter, marketplace];
                    }
                })
                setMarketplaces(canauxVenteFilter) 
            }
        }).catch((err) => setError(err.message));
    }

    useEffect(() => {
        getMarketPlacesDataByStatus();
    }, []);


    return (
        <>
            <div className='bg-gray-200 w-full min-h-screen flex justify-center '>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
                    {
                        marketplaces?.map((marketplace, index) => (
                            <div className='w-96 h-fit p-2 m-10  bg-white rounded-xl transform transition-all hover:translate-y-4 duration-300 shadow-lg hover:shadow-2xl' key={index}>
                                <div className='h-40' onClick={() => {
                                    setShowDetailModal(true);
                                    setCVIndex(marketplace.Name);
                                }}>
                                    <img className='w-96 p-4 align-middle object-cover rounded-xl' alt="logo" src={marketplace.Logo} />
                                </div>
                                <div className='p-2'>
                                    <h2 className='font-bold text-lg'>
                                        <a href={marketplace.Link} target="_blank" rel="noreferrer">
                                            {marketplace.Name}
                                        </a>
                                    </h2>
                                    <p className='text-sm text-600'>{marketplace.Description}</p>
                                </div>
                                <div className='m-2'>
                                    <button className='text-white bg-primaryLight px-3 py-1 rounded-md hover:bg-primaryDark'>Learn More</button>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
            <CvDetailsModal onClose={handleOnClose} visible={showDetailModal} marketIndex={CVIndex} />
        </>
    )
}

export default CvCard;
