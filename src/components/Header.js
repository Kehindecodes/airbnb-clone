import React,{useState,useEffect,useRef} from 'react'
import  logo from '../images/logo.png'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar';
import './Header.css'
import { makeStyles } from '@material-ui/core/styles'
import SearchBtn from './SearchBtn';
import FilterMenu from './FilterMenu';
import Collapse from '@material-ui/core/Collapse';
import Zoom from '@material-ui/core/Zoom';




const Header = () => {

    const ref = useRef(null);
    const classes = useStyles();
    const[isOpen, setIsOpen] = useState(false)
    const openFilterMenu = () =>{
        setIsOpen(true)
    }
    // const container = useRef(null);
   
    // useCloseFilterMenu(container);
    const closeFilterMenu = (e) =>{
        if(ref.current && !ref.current.contains(e.target)){
            e.preventDefault()
           setIsOpen(false)
           console.log('you just click the body')
        }
    }
        
    useEffect(() => {
        document.addEventListener('click', closeFilterMenu);
       
        // clean up
        return  () =>{
            document.removeEventListener('click', closeFilterMenu);
        }
    }, [ref])
    
 
    // useEffect(() => {
    //     document.body.addEventListener('click', closeFilterMenu);
       
    // }, [])
    return (
            <AppBar className={classes.nav} 
            position="static"  ref={ref}  >
              
                { isOpen === true ? 
               
                 <FilterMenu  />
                :'' }
              
              {/* { isOpen === true ? 
                <Overlay/>
              
              : '' } */}

                 <Container maxWidth="lg" >
                <Toolbar className={classes.navWrapper}>
                <div>
                <img src={logo} alt="logo"/>
                
                </div>
                <SearchBtn click = {openFilterMenu} />
               
                </Toolbar>
                </Container>
            </AppBar>
           
    )
}


export default Header;

const useStyles = makeStyles({
    nav: {
     background:"transparent",
     padding:" 1.5rem 2rem",
     boxShadow:"none"
    
      
    },
    navWrapper:{
        justifyContent:"space-between"
    },
  

  });