import React,{useEffect,useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';

const DisplayRooms = () => {
    const classes = useStyles();
    const[data,setData]= useState([]);
    // console.log(stays)
    const getData = async () =>{
      let res = await fetch ('stays.json')
        let stays =  await res.json()
            stays.length = 6
         setData(stays)
          console.log(stays)
          
       
     }
    useEffect(() => {
     getData()
    }, [])


    return (
        <main className={classes.main}>
          <Container>
            <Box className={classes.headingWrapper}>
              <Typography variant="h1" style={{color:"#333",fontWeight:700,fontSize:"24px",lineHeight:"29.26px"}}>
                 Stays in Finland
               </Typography>
              <Typography style={{color:"#4f4f4f",fontWeight:500,fontSize:"14px"}}>
                 12+ stays
               </Typography>
                 
             </Box>
             <Grid container spacing={2} className={classes.gridWrapper}>
                    { React.Children.toArray(data.map((value)=>
                    <Grid item  xs={12} md={6} lg={4} >
                      <div  className={classes.card}>
                  <img src={value.photo} alt={value.title} className={classes.img}/>
                      </div>
                      <div className={classes.prop}>
                        <Typography className={classes.p}>
                          {value.type}{value.beds!== null?`.${value.beds}beds`: ""}
                        </Typography>
                       
                       <div style={{display:"flex"}}>
                       <StarIcon style={{color:" #EB5757", marginRight:"0.3rem",width:"15.76px",height:"15.88px"}}/>
                       <Typography style={{fontSize:"14px",fontWeight:500,color:"#4f4f4f"}}>
                         {value.rating}
                          </Typography>
                       </div>
                        
                      </div>
                      <div className={classes.title}>
                           <Typography component="h3" className={classes.h3}>
                             {value.title}
                           </Typography>
                      </div>
                    </Grid>
                    )) }
                  </Grid>

          </Container>
         
         
        </main>
    )
}

export default DisplayRooms

const useStyles = makeStyles({
    headingWrapper:{
        display:'flex', 
        justifyContent:'space-between',
        padding:" 0 2rem",
    },
    main:{
        marginTop:"3rem"
    },
    card:{
      width:"365px",
      height:"269px",
      marginBottom:"1rem"
    },
    img:{
      width:"100%",
      borderRadius:"24px",
      height:"269px",
     
      
    },
    gridWrapper:{
      padding:" 0 2rem",
      marginTop:"1rem"
    },
    prop:{
       display:"flex",
       justifyContent:"space-between",
       marginRight:"1rem",
      
       
    },
    p:{
      fontWeight:500,
      fontSize:"14px !important",
      color:"#828282"
    },
    title:{
      marginTop:"1rem",
      marginBottom:"2rem"
    },
    h3:{
        fontWeight:600,
        fontSize:"16px",
        textAlign:"left",
        color:"#333"
    }
     
  });