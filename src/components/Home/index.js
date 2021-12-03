import React from 'react';
import SideBar from '../../common/sideBar';
import TopBar from '../../common/topBar';
import '../../assets/styling/home.css';
import Banner from './banner';


const Home = ()=>{
    return(
        <div style={{display:'flex'}}>
        <SideBar></SideBar>
        <div style={{width:'100%'}}>
        <TopBar></TopBar>
        <Banner></Banner>
        
        </div>
        </div>
    )
}


export default Home;