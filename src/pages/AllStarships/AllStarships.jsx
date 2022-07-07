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
      {starships.length ? 
      <>
        <div className='all-starships'>
          {starships.map(starship =>
            <Link to='/starship' state={{starship}} key={starship.name} className="starship-links">
              <div className='starship-div'>
                {starship.name}
              </div>
            </Link>
          )}
        </div>
      </>
      :
      <>
        <p>LOADING STARSHIPS</p>
      </>
      }
    </>
  );
}

export default AllStarShips;