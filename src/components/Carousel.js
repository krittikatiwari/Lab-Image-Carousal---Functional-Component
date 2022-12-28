import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const[img,setImg]=useState(0);

    const forward=()=>{
        if(img<2){
        setImg(img+1)}
        else{
            setImg(0)
        }
    }

    const backward=()=>{
        if(img>0){
        setImg(img-1)
    }
    else{
        setImg(2)
    }
    }


    return(
        <>
        <div>
        <ArrowBackIosIcon className="back" onClick={backward}/>
        <h1 className="title">{images[img].title}</h1>
            <img src={images[img].img}/>
            <h2 className="subtitle">{images[img].subtitle}</h2>
            <ArrowForwardIosIcon className="ford" onClick={forward}/>
        </div>
        </>
    )
}

export default Carousel;