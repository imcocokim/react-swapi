import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()
  console.log(location)

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails()
    }
  })
  return (
    <>
    </>
  );
}

export default StarshipDetails;