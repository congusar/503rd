import logo from '../images/logo.svg';
import '../App.css';
import ScheduledEvent from '../components/ScheduledEvent.jsx';
import Navbar from '../components/Navbar.jsx'; 
import serverObject from "../config.js"
import React, {useState} from 'react';

function Dashboard() {
  return (
    <>
     
      <ScheduledEvent title={"Card1"} description={"Description"} img={"../logo512.png"} link={"google.com"} id={"hi"}/>
      <ScheduledEvent />
      <ScheduledEvent />
    </>
  );
}

export default Dashboard;
