import { useState, useEffect} from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from "react-router-dom"



const AllStarShips = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchAllStarships = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchAllStarships()
  }, [])

  return ( 
    <>
      <div>
        <h1>All Starships</h1>
        <div className='all-starships'>
          
        {starships.map(starship =>
        <Link
          to='/starship'
          state={{starship}}
          key={starship.name}
        >
          {starship.name}
        </Link>
        )}
        </div>

      </div>

    </>
  );
}

export default AllStarShips;