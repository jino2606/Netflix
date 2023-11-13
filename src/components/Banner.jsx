import React, { useEffect, useState } from "react";
import './Banner.css'
import instance from "../instance";
import requests from '../requests';
import Nav from "./Nav";



function Banner({title, fetchUrl}){

    console.log("TeeastMissioi",requests.fetchTrending);

    const baseUrl = "https://image.tmdb.org/t/p/original/" 

    const [apiData, setApiData] = useState()

    const getBannerData = async()=>{

        const {data} = await instance.get(fetchUrl)

        /* We are getting the results array from data and then getting a random data from array . It will change fro every reload */
        setApiData(data.results[Math.floor(Math.random()*data.results.length)]);
    }

    /* empty appray : renders only at first render */
    useEffect(()=>{
        getBannerData()
    },[])

    console.log("apiDaTA", apiData);

    return(
        <div className="banner" style={{height:'600px', backgroundImage:`url(${baseUrl+apiData?.backdrop_path})`, backgroundSize:'cover', backgroundAttachment:'fixed', backgroundPosition:'center'}}>
            <div className="banner-content">
                <h1>{apiData?.name}</h1>
                <button className='btn btn-danger'>Play <i class="fa-solid fa-play bg-transparent"></i> </button>
                <button className='btn border-whitemore ms-3'> More Info <i class="fa-solid fa-caret-down bg-transparent"> </i></button>
                <h2>{apiData?.overview?.slice(0,200)}....</h2>
            </div>
        </div>
    )
}

export default Banner
