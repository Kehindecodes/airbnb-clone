import React,{useState,useEffect,useRef} from 'react'
import  logo from '../images/logo.png'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar';
import './Header.css'
import { makeStyles } from '@material-ui/core/styles'
import SearchBtn from './SearchBtn';
import FilterMenu from './FilterMenu';
import { TramRounded } from '@material-ui/icons';
 


const Header = () => {
    const classes = useStyles();
    const[isOpen, setIsOpen] = useState(false)

    const openFilterMenu = () =>{
        setIsOpen(true)
    }
    const container = useRef(null);
    // useCloseFilterMenu(container);
   
        
    useEffect(() => {

        const closeFilterMenu = (e) =>{
            if(container.current && !container.current.contains(e.target)){
               setIsOpen(false)
               console.log('you just click the body')
            }
        }
        document.addEventListener('click', closeFilterMenu);
       
    }, [container])
    
 
    // useEffect(() => {
    //     document.body.addEventListener('click', closeFilterMenu);
       
    // }, [])
    return (
        
            <AppBar className={classes.nav} position="static" ref={container}>
                { isOpen === true ? <FilterMenu/> :'' }
                 <Container maxWidth="lg" >
                <Toolbar className={classes.navWrapper}>
                <div>
                <img src={logo} alt="logo"/>
                
                </div>
                <SearchBtn click = {openFilterMenu}/>
               
                </Toolbar>
                </Container>
            </AppBar>
           
    )
}

export default Header

// custom hook to close the fitler menu
const useCloseFilterMenu = (ref) => {
    const[isOpen, setIsOpen] = useState(false)

   
}

const useStyles = makeStyles({
    nav: {
     background:"transparent",
     padding:" 1.5rem 2rem",
     boxShadow:"none"
    
      
    },
    navWrapper:{
        justifyContent:"space-between"
    }
  });