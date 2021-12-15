import React from 'react'
import Navbar from './Navbar'
import Particles from "react-tsparticles";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar,  } from '@material-ui/core';
import Typed from "react-typed";
import Typography from "@material-ui/core/Typography";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Cards from './Cards';
import Footer from './Footer';
import logo from './logo.gif';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import meme from './meme.gif'






const useStyles = makeStyles((theme) => ({

  appbar : {
    background : 'none' ,
    backgroundColor : 'transparent' ,
  },
    
    navbar :{
      marginBottom : '0' ,
      border : '0',
      backgroundColor : 'transparent' ,
      background : 'none' ,
    },
    root : {
        background: "#000000",
        height: "400vh",
        
        
    },

    title : {
        color : "#ffffff",
        marginTop : '100px',
        marginLeft : '40px' ,
  
    },

    boom : {
      color : "#FFFFFF",
   },
   colourTitle : {
    color : "#FF0099" ,
} ,

   main : {
    display : "flex" ,
    justifyContent : "center" ,
    alignItems : "center" ,
    marginTop : '150px' , 
   },

   subtitle: {
    color: "#FF0099",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },

  meme: {
    display : "flex" ,
    justifyContent : "center" ,
    alignItems : "center" ,
    marginTop : "80px",
  },
  memetext:{
    color : "#ffffff" ,
    display : "flex" ,
    justifyContent : "center" ,
    alignItems : "center" ,
  },


}));



function Home ()  {
    const classes = useStyles();
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
        <>
        <React.Fragment>
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
     
        fpsLimit: 45,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
        <Box component="header"  className= {classes.root}>
               <Navbar/>
               
            <div className={classes.main} >  
               <Collapse in = {true}>
            <div  >
           <div>
           <img src={logo} alt="unity" />
           <Fade right>

               <h1 className = {classes.title} > <span className = {classes.boom} > Welcome to  <br/> the coolest Branch </span> <span className = {classes.colourTitle} > IT </span> </h1>
           </Fade>
               
           </div>
           </div> 
           </Collapse>
           </div> 
            
           <Box className={classes.typedContainer}>
      
      <LightSpeed right >    
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "ABHI TOH PARTY",
           
            "SHURU HUI HAI",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      </LightSpeed> 
         </Box>
        <Fade left >
         <div className={classes.meme}>
             <img src ={meme}  /> 
        </div>
        </Fade>
             <Fade right>
             <div className = {classes.memetext} >
               <h2>Phele login toh karo !!!</h2>
               <Button color="info" href = '/signup' >Login</Button>
             </div>
             </Fade>
        <Fade left>

        <Cards/>
        </Fade> 
      

        <Footer/>
        </Box>
        
        </React.Fragment>

   
        </>
    )
}

export default Home
