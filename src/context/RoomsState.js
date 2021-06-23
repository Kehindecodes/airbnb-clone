import React,{useState} from 'react'
import RoomsContext from './roomsContext'
const RoomsState = (props) => {
    const[data,setData]= useState([]);
    const getData = async () =>{
        let res = await fetch ('stays.json')
          let stays =  await res.json()
            stays.length = 6
           setData(stays)
            console.log(stays)
            console.log(stays.map((stay)=>{
               return stay.city 
            }) )
            
         
       }

    return (
        <RoomsContext.Provider value={{data,
        getData,}}>
            {props.children}
        </RoomsContext.Provider>
    )
}

export default RoomsState
