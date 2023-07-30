import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CvDetailsModal from "../CVModal/CvDetailsModal";
import LoadingRing from "../LoadingRing";
import RejectedIcon from "@mui/icons-material/CancelRounded";
import ApprovedIcon from "@mui/icons-material/CheckCircleRounded";
import PendingIcon from "@mui/icons-material/AccessTimeFilledRounded";
import NonFavoriteIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./style.css";
import IconButton from "@mui/material/IconButton";
import clsx from "clsx";
import useLazyLoad from "../../Hooks/useLazyLoad";
//import { useSelector, useDispatch } from 'react-redux';
//import { MarketData } from '../../Redux/Reducers/RTKMarketplace'

const CvCard = (props) => {
  const [error, setError] = useState();
  const [marketplaces, setMarketplaces] = useState([]);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [CVIndex, setCVIndex] = useState();
  const [itemFav, setItemFav] = useState(true);
  const [favoris, setFavoris] = useState([]);

  // const dispatch = useDispatch();
  // const MarketRTK = useSelector((state) => state.marketplacesRTK.value);
  // console.log("==========" + MarketRTK.name)
  // const SubscriptionRTK = useSelector((state) => state.SubscriptionRTK.value);
  // console.log("==========" + SubscriptionRTK.accountHolder)

  var canauxVente = [];
  var canauxVenteFilter = [];
  var canauxVenteFavoris = [];

  const handleOnClose = () => {
    setShowDetailModal(false);
  };

  const getMarketPlacesDataByStatus = () => {
    axios
      .get("/Mock/Marketplaces.json")
      .then((res) => {
        canauxVente = res.data.Marketplaces;
        if (props.tag === "All Marketplaces") {
          setMarketplaces(res.data.Marketplaces);
          canauxVente?.map((marketplace) => {
            if (marketplace.isFavorite === true) {
              canauxVenteFavoris = [...canauxVenteFavoris, marketplace.id];
            }
          });
          setFavoris(canauxVenteFavoris);
          setIsLoading(false);
        } else {
          canauxVente?.map((marketplace) => {
            if (marketplace.status === props.tag) {
              canauxVenteFilter = [...canauxVenteFilter, marketplace];
              if (marketplace.isFavorite === true) {
                canauxVenteFavoris = [...canauxVenteFavoris, marketplace.id];
              }
            }
          });
          setMarketplaces(canauxVenteFilter);
          setFavoris(canauxVenteFavoris);
          setIsLoading(false);
        }
        if (props.tag === "Favorites") {
          canauxVenteFilter = [];
          canauxVente?.map((marketplace) => {
            if (marketplace.isFavorite === true) {
              canauxVenteFilter = [...canauxVenteFilter, marketplace];
              canauxVenteFavoris = [...canauxVenteFavoris, marketplace.id];
            }
          });
          setMarketplaces(canauxVenteFilter);
          setFavoris(canauxVenteFavoris);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  // const IconDisplay = (status) => {
  //     switch (status) {
  //         case "Accepted":
  //             return <ApprovedIcon sx={{ fontSize: { xs: "2.5em", sm: "2.5em", }, color: "#00FF00", }} />
  //         case "Rejected":
  //             return <RejectedIcon sx={{ fontSize: { xs: "2.5em", sm: "2.5em", }, color: "#c93543", }} />
  //         case "Pending":
  //             return <PendingIcon sx={{ fontSize: { xs: "2.5em", sm: "2.5em", }, color: "rgb(28,120,182)", }} />
  //     }
  // }

  const favoriteOnclick = () => {
    setItemFav(!itemFav);
  };
  // dispatch(MarketData({ name:"mehdi1" }));
  const FavoriteDisplay = (isFavoriteMarket, marketId) => {
    switch (isFavoriteMarket) {
      case true:
        return (
          <FavoriteIcon
            onClick={() => {
              favoriteOnclick();
            }}
            sx={{
              fontSize: { xs: "2.5em", sm: "2.5em" },
              color: "#B01E28",
            }}
          />
        );
      case false:
        return (
          <NonFavoriteIcon
            onClick={() => {
              favoriteOnclick();
            }}
            sx={{
              fontSize: { xs: "2.5em", sm: "2.5em" },
              color: "#B01E28",
            }}
          />
        );
      default:
    }
  };

  useEffect(() => {
    getMarketPlacesDataByStatus();
  }, []);

  return (
    <>
      <div className="w-full flex justify-center" data-testid="cardCv">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {isLoading && !error ? (
            <LoadingRing style={{ marginLeft: "50%", marginTop: "30px" }} />
          ) : (
            marketplaces
              ?.sort((a, b) => (a.Score > b.Score ? -1 : 1))
              .map((marketplace, index) => (
                <div
                  className="w-[330px] md:w-96 h-fit p-2 mb-10 md:m-10  bg-white rounded-xl transform transition-all hover:translate-y-[-1rem] hover:translate-x-[-1rem] duration-300 shadow-lg hover:shadow-2xl"
                  key={index}
                >
                  <div>
                    {/* {setItemFav(marketplace.isFavorite)} */}
                    {/* <div className='mt-[-20px] mr-[-20px] float-right flex flex-row '>
                                            {IconDisplay(marketplace.status)} 
                                        </div> */}
                  </div>

                  <div className="h-48">
                    <div className="premier_plan mt-[10px] ml-[-20px] float-right flex flex-row ">
                      {/* {FavoriteDisplay(marketplace.isFavorite, marketplace.id)} */}
                      <IconButton
                        onClick={() => {
                          if (favoris.includes(marketplace.id)) {
                            const newFavoris = favoris.filter(
                              (id) => id !== marketplace.id
                            );

                            setFavoris(newFavoris);
                          } else {
                            const newFavoris = [...favoris, marketplace.id];

                            setFavoris(newFavoris);
                          }
                        }}
                        sx={{
                          fontSize: { xs: "2.5em", sm: "2.5em" },
                          color: "#B01E28",
                        }}
                      >
                        {favoris.includes(marketplace.id) ? (
                          <FavoriteIcon fontSize="large" />
                        ) : (
                          <NonFavoriteIcon fontSize="large" />
                        )}
                      </IconButton>
                    </div>
                    <a
                      href={marketplace.Link}
                      className="deuxieme_plan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="w-96 p-4 align-middle object-cover rounded-xl z-0"
                        alt="logo"
                        src={marketplace.Logo}
                      />
                    </a>
                  </div>

                  <div className="p-4">
                    <p className="textOverflow">{marketplace.Description}</p>
                  </div>
                  <div className="m-2">
                    <button
                      className="h-12 w-full text-white bg-primaryLight px-3 py-1 rounded-md hover:bg-primaryDark"
                      onClick={() => {
                        setShowDetailModal(true);
                        setCVIndex(marketplace.id);
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                  <div className="m-2">
                    <Link to={"/enroll"} state={marketplace}>
                      <button className="h-12 w-full text-white bg-secondPrimaryLight px-3 py-1 rounded-md hover:bg-primaryDark">
                        Enroll Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
      {showDetailModal && (
        <CvDetailsModal
          onClose={handleOnClose}
          visible={showDetailModal}
          marketIndex={CVIndex}
        />
      )}
    </>
  );
};

export default CvCard;
