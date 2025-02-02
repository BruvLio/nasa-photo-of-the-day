import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

import NasaPhoto from './Components/NasaPhoto'

function App() {
  const [data, setData] = useState();


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((res)=> {
      setData(res.data)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      { data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;



/**
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

/** 
date: "2022-09-13"
explanation: "rlier this month, the Sun exhibited one of the longer filaments on record.  Visible as the bright curving streak around the image center, the snaking filament's full extent was estimated to be over half of the Sun's radius -- more than 350,000 kilometers long. A filament is composed of  hot gas held aloft by the Sun's magnetic field, so that viewed from the side it would appear as a raised prominence.  A different, smaller prominence is simultaneously visible at the Sun's edge. The featured image is in false-color and color-inverted to highlight not only the filament but the Sun's carpet chromosphere.  The bright dot on the upper right is actually a dark sunspot about the size of the Earth.  Solar filaments typically last from hours to days, eventually collapsing to return hot plasma back to the Sun. Sometimes, though, they explode and expel particles into the Solar System, some of which trigger auroras on Earth. The pictured filament appeared in early September and continued to hold steady for about a week."
hdurl: "https://apod.nasa.gov/apod/image/2209/SnakingFilament_Friedman_960.jpg"
title: "A Long Snaking Filament on the Sun"
 */