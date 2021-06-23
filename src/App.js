import react,{useState} from 'react';
import './App.css'
import Header from './components/Header';
import DisplayRooms from './components/DisplayRooms';
import RoomsState from './context/RoomsState';


function App() {
    //  const[isOpen, setIsOpen] = useState(false)
 

  return (
    <>
    <RoomsState>
       <Header/>
     <DisplayRooms/>
        
     </RoomsState>
    </>
  );
}

export default App;
