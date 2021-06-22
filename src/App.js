import react,{useState} from 'react';
import './App.css'
import Header from './components/Header';
import DisplayRooms from './components/DisplayRooms';



function App() {
    //  const[isOpen, setIsOpen] = useState(false)
 

  return (
    <>
       <Header/>
     <DisplayRooms/>
        
   
    </>
  );
}

export default App;
