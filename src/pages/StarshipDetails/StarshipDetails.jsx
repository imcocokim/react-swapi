import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";
import { Link } from "react-router-dom"
import PilotList from "../../components/PilotList/PilotList";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])
  
  return (
    <div className="">
      {starshipDetails.name 
        ? <>
            <p>NAME: {starshipDetails.name} </p>
            <p>MODEL: {starshipDetails.model} </p>
            {starshipDetails.pilots.length 
              ? <PilotList pilots={starshipDetails.pilots}/>
              : <p>There are no pilots.</p>
            } <Link to='/'> RETURN</Link>
          </>
        : <p>LOADING STARSHIP DETAILS...</p>
      }
    </div>
  );
}

export default StarshipDetails;