import './App.css'
import { Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import AllStarShips from './pages/AllStarships/AllStarships';



function App() {
  return (
    <>
      <NavBar />
      <AllStarShips />
      {/* <Routes>
        <Route path='/starship' >
      </Routes> */}
    </>
  
  );
}

export default App;
