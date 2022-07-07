import Pilot from "./Pilot";


const PilotList = ({pilots}) => {
  return ( 
    <>
      {pilots.map(pilot => 
        <div key={pilot} className="pilots">
          <Pilot pilot={pilot}/>
        </div>
      )}
    </>
  );
}

export default PilotList;