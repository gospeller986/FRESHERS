import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from "@material-ui/core/styles";
import Particles from "react-tsparticles";
import Box from '@mui/material/Box';
import Footer from './Footer';
import Papers from './Papers';

const useStyles = makeStyles((theme) => ({
    root : {
        background: "#000000",
        height: "400vh",
        
        
        
    },
    title: {
       color : "#ffffff" ,
       justifyContent : "center",
       display : 'flex',
    },

    paper : {
        justifyContent : "center",
       display : 'flex',
       marginLeft : "100px",
    }
}));

const Taskpage = () => {
    const classes = useStyles();
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
        <div>
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
         <div className={classes.title}>
            <h1> 📝 Challenges 📝 </h1>
         </div>
         <div className={classes.paper} ></div>
         <Papers/>
        <Footer/>
        </Box>    
        </div>
    )
}

export default Taskpage
