import React, { useEffect, useState } from "react";
import instance from "../instance";
import './Row.css'

function Row({title, fetchUrl, isPoster}){

    /* Creating a state to save the response data to access it any where in thwe functoin */
    const [allmovies, setAllMovies] = useState()

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    /*  */
    const fetchData = async() =>{

        /* the instance is called from the instance that we created and exported to here */

        /* here get is used. Refer Axios doc on internet */

        /* instead of giving variaable liike response we are giving {data.result} which means to get the values from data.result array inside the whole response */
        const {data} = await instance.get(fetchUrl)

        setAllMovies(data.results)

    }


    /* empty appray : renders only at first render */
    useEffect(()=>{
        fetchData()
    },[])

    return(
        <div className="row">
            <h1>{title}</h1>
            <div className="movie-row">
                {   
                    // the "?" is used to thath if only the aray contain valuesa should be taken else not
                    allmovies?.map(item=>(
                        // Changing css and output item based on isPoster variable true or false and also both lines will work
                        <img className={`movie ${isPoster && "movie_poster"}`} src={`${baseUrl}${isPoster?item.poster_path:item.backdrop_path}`} alt="No Image Found" />
                        // <img className={isPoster?"movie_poster":"movie"} src={`${baseUrl}${isPoster?item.poster_path:item.backdrop_path}`} alt="No Image Found" />
                    ))
                } 
            </div>
        </div>
    )
}

export default Row