import { useState, useEffect} from 'react'


const Pilot = ({props}) => {
  const [pilot, setPilot] = useState()

  useEffect(() =>{
    const fetchDetails = async () => {
      const pilotData = await fetch(props.pilot)
      const data = await pilotData.json()
      setPilot(data)
    }
    fetchDetails()
  }, [props.pilot])


  return ( 
    <div>
        {pilot?.name}
    </div>
  );
}

export default Pilot;