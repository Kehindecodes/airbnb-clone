import React from 'react';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles'

const SearchBtn = ({click}) => {
    const classes = useStyles();
    return (
        
            <Box>
               
                {/* <Card className={classes.card}>
                   <CardContent className={classes.cardWrapper}>
                    <Typography >
                    Helsinki, Finland
                    </Typography>
                    <Typography  >
                        Add guests
                    </Typography>
                  
                    </CardContent>
             
                </Card> */}
                <ButtonGroup  variant="text" className={classes.card}>
                    <Button className={classes.btnCnt} onClick={click} ><Typography className={classes.country} >
                    Helsinki, Finland
                    </Typography></Button>
                    <Button className={classes.btnCnt}  onClick={click} > <Typography className={classes.guest} >
                        Add guests
                    </Typography></Button>
                     <Button onClick={click}>  <SearchIcon  style={{color:" #EB5757"}}/></Button>
                      </ButtonGroup>
            </Box>
    )
}

export default SearchBtn

const useStyles = makeStyles({
    cardWrapper: {
       display:"flex",
      padding:0
      
    },
    country:{
        color:"#333",
        fontWeight:400 ,
        fontSize:14,
        textTransform:"capitalize"
    },
    guest:{
        color:"#bdbdbd",
        fontWeight:400,
        fontSize:14,
        textTransform:"capitalize"
      
       
    },
    card:{
        width:"297px",
        height:"55px",
        background:"#fff",
        boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
        borderRadius:"16px"
    },
    btnCnt:{
        borderRight:" 1px solid rgba(0, 0, 0, 0.1) !important"
    }

  });