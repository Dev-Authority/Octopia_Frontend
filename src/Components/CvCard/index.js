import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { apiURL } from '../../Assets/util/api'
import axios from 'axios';
import { MarketData } from '../../Redux/Reducers/RTKMarketplace'
import CvDetailsModal from './CvDetailsModal';
import LoadingRing from '../LoadingRing';
import RejectedIcon from '@mui/icons-material/CancelRounded';
import ApprovedIcon from '@mui/icons-material/CheckCircleRounded';
import PendingIcon from '@mui/icons-material/AccessTimeFilledRounded';
import NonFavoriteIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';



const CvCard = (props) => {

    const [error, setError] = useState();
    const [marketplaces, setMarketplaces] = useState([]);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [CVIndex, setCVIndex] = useState();
    const [itemFav, setItemFav] = useState(true);

    const dispatch = useDispatch();

    const MarketRTK = useSelector((state) => state.marketplacesRTK.value);

    console.log("==========" + MarketRTK.name)

    const SubscriptionRTK = useSelector((state) => state.SubscriptionRTK.value);

    console.log("==========" + SubscriptionRTK.accountHolder)

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
        axios.get("/Mock/Marketplaces.json").then((res) => {
            canauxVente = res.data.Marketplaces;
            if (props.tag === "All Marketplaces") {
                setMarketplaces(res.data.Marketplaces);
                setIsLoading(false);
            } else {
                canauxVente?.map(marketplace => {
                    if (marketplace.status === props.tag) {
                        canauxVenteFilter = [...canauxVenteFilter, marketplace];
                    }
                })
                setMarketplaces(canauxVenteFilter);
                setIsLoading(false);
            }
            if (props.tag === "Favorites") {
                canauxVenteFilter = [];
                canauxVente?.map(marketplace => {
                    if (marketplace.isFavorite === true) {
                        canauxVenteFilter = [...canauxVenteFilter, marketplace];
                    }
                })
                setMarketplaces(canauxVenteFilter);
                setIsLoading(false);
            }
        }).catch((err) => {
            setError(err.message);
            setIsLoading(false);
        });
    }

    const IconDisplay = (status) => {
        switch (status) {
            case "Accepted":
                return <ApprovedIcon sx={{ fontSize: { xs: "2.5em", sm: "2.5em", }, color: "#00FF00", }} />
            case "Rejected":
                return <RejectedIcon sx={{ fontSize: { xs: "2.5em", sm: "2.5em", }, color: "#c93543", }} />
            case "Pending":
                return <PendingIcon sx={{ fontSize: { xs: "2.5em", sm: "2.5em", }, color: "rgb(28,120,182)", }} />
            default:
        }
    }

    const favoriteOnclick = () => {
        setItemFav(!itemFav);
    }
    // dispatch(MarketData({ name:"mehdi1" }));
    const FavoriteDisplay = (isFavoriteMarket) => {
        var Favorite = isFavoriteMarket;
        switch (Favorite) {
            case true:
                return <FavoriteIcon onClick={() => { }} sx={{ fontSize: { xs: "2.5em", sm: "2.5em", }, color: "#B01E28", }} />
            case false:
                return <NonFavoriteIcon onClick={() => { Favorite = !Favorite }} sx={{ fontSize: { xs: "2.5em", sm: "2.5em", }, color: "#B01E28", }} />
            default:
        }
    }



    useEffect(() => {
        getMarketPlacesDataByStatus();
    }, []);



    return (
        <>
            <div className='w-full min-h-screen flex justify-center'>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
                    {
                        (isLoading && !error) ? <LoadingRing style={{ marginLeft: "50%", marginTop: "30px" }} /> :
                            marketplaces?.sort((a, b) => a.Score > b.Score ? -1 : 1).map((marketplace, index) => (
                                <div className='w-[330px] md:w-96 h-fit p-2 mb-10 md:m-10  bg-white rounded-xl transform transition-all hover:translate-y-4 duration-300 shadow-lg hover:shadow-2xl' key={index}>
                                    <div className='z-10'>
                                        {/* {setItemFav(marketplace.isFavorite)} */}
                                        <div className='mt-[-20px] ml-[-20px] float-left flex flex-row '>{FavoriteDisplay(marketplace.isFavorite)}</div>
                                        <div className='mt-[-20px] mr-[-20px] float-right flex flex-row '>{IconDisplay(marketplace.status)}</div>

                                    </div>

                                    <div className='h-40' onClick={() => {
                                        setShowDetailModal(true);
                                        setCVIndex(marketplace.id);
                                    }}>
                                        <img
                                            className='w-96 p-4 align-middle object-cover rounded-xl z-0'
                                            alt="logo"
                                            src={marketplace.Logo} />
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
            {showDetailModal && <CvDetailsModal onClose={handleOnClose} visible={showDetailModal} marketIndex={CVIndex} />}

        </>
    )
}

export default CvCard;