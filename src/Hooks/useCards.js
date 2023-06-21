import { useState, useEffect } from "react";
import { getMarketPlacesPage } from "../Services/MarketplacesCalls";

const useCards = (pageNum = 1) => {
    const  [result, setResult] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, Error] = useState({})
    const [hasNextPage, setHasNextPage] = useState(false)

    return {isLoading, isError, error, result, hasNextPage}
}
export default useCards;