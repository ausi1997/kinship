import React from 'react';
import SideBar from '../../common/sideBar';
import TopBar from '../../common/topBar';
import '../../assets/styling/home.css';
import Banner from './banner';
import Orders from './orders';
import EventsList from './events';
import ClassesList from './classes';


const Home = ()=>{
    return(
        <div style={{display:'flex'}}>
        <SideBar></SideBar>
        <div style={{width:'100%'}}>
        <TopBar/>
        <Banner/>
        <Orders/>
        <EventsList/>
        <ClassesList/>
        
        </div>
        </div>
    )
}


export default Home;