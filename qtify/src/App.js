import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import StyleEngineProvider from "@mui/material/StyledEngineProvider"
import {fetchNewAlbums, fetchSongs, fetchTopAlbums} from "./api/api"
import Hero from "./components/Hero/Hero";
import { Outlet } from "react-router-dom";

function App() {
  const [data ,setData] =useState({});

  const generateData =(key,source)=>{
    source().then((data)=>{
      setData((prevState)=>{
        return {...prevState, [key] : data}
      });
    });
  };
  
  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums)
    generateData("newAlbums", fetchNewAlbums)
    generateData("songs", fetchSongs)
  },[])
  const {topAlbums=[] , newAlbums=[], songs=[] } =data;
  return (   
    <StyleEngineProvider injectFirst>
      <Navbar/>
        <Outlet context={{data: {topAlbums, newAlbums, songs}}}/>
      </StyleEngineProvider>
  );
}

export default App;
