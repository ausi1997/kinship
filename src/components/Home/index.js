import React from 'react';
import SideBar from '../../common/sideBar';
import TopBar from '../../common/topBar';
import '../../assets/styling/home.css';
import Banner from './banner';
import Orders from './orders';
import EventsList from './events';


const Home = ()=>{
    return(
        <div style={{display:'flex'}}>
        <SideBar></SideBar>
        <div style={{width:'100%'}}>
        <TopBar/>
        <Banner/>
        <Orders/>
        <EventsList/>
        
        </div>
        </div>
    )
}


export default Home;