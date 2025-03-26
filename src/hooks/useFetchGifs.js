import { useState, useEffect } from 'react';
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => { 

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoding] = useState(true)

    const getImages = async () => {
    const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoding(false)
    }

useEffect(() => {
        getImages()
    //getGifs(category)
      //.then (newImages => setImages(newImages)) //*Otra manera de manejar promesas en useEffect
}, [ ])


    return {
        images,
        isLoading
    }
}

