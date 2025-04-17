
import logoEPD from '../images/logo512EPD.png';
import logoSRT from '../images/logo512SRT.png';
import '../App.css';
import CStaffCarousel from '../components/CStaffCarousel.jsx';
import React, {useState} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min.js';
import ApplicationCard from '../components/ApplicationCard.jsx';
import App from '../App.js';
import BStaffCarousel from '../components/BStaffCarousel.jsx';


//import overwrites


function Home() {
  const LinkEPDAppTracker = () => {
    window.open("https://docs.google.com/spreadsheets/d/1yUtJJOUymcOskz19bFOxkyoBi5N8ksCjj_JGxQFuAoc/edit?gid=776690654#gid=776690654");
  }

  const LinkSRTAppTracker = () => {
    window.open("https://docs.google.com/spreadsheets/d/1gTTvao1dR9xYelafkhc8FCfSQMRMdebrSJZHbvjMJ-c/edit?gid=776690654#gid=776690654");
  }

  return (
    <>
      <br />
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <hr class="my-2" />
        <h3>Zanances USAR</h3>
        <h1>503rd Battalion</h1>
        <hr class="my-4" />
      </div>
      <BStaffCarousel BCOname={"Noay_HD1"} BXOname={"Cong_Tviy09"} BSMname={"MAX11234F"} />
      <br />
      <br />
      
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col"> 
            <h3>Special Reaction Team</h3>
            <h6>Semper Volentes!</h6>
            <p style={{textAlign: "justify"}}>The Special Reaction Team consists of highly-skilled combatants whose sole job is to deal with armed threats that raid our grounds. The base platoon is the Bravo Reaction Team, consisting of the most elite military police assets. The logistical platoon of the Special Reaction Team is the Archangels, tasked with logging activities and events. The last platoon of the Special Reaction Team is the Rapid Response Aviation Unit, consisting of elite pilots who are entrusted with locating potential threats that pose a danger to our grounds.</p>
            <CStaffCarousel CCOname={"BobieDene"} CXOname={"mrblox11000"} CFSname={"oSwenzu"} />
            <br />
            <img src={logoSRT} style={{width:"50%"}} />
          </div>
          <div className="col"> 
            <h3>Executive Protection Detail</h3>
            <h6>Guardians of Honor, Shields of Justice!</h6>
            <p style={{textAlign: "justify"}}>The Executive Protection Detail consists of the War Dawgs platoon that is entrusted with providing elite protection and vital security to the most important personnel within the United States Army. The Advisory Unit, the second platoon of the Executive Protection Detail deals with logistical duties as well as the Protection Detail School, the elite academy that all candidates go through in order to become fully fledged protection officers.</p>
            <br />
            <br />
            <CStaffCarousel CCOname={"crazybijij2"} CXOname={"boetson120fps"} CFSname={"J4Jaguar1"} />
            <br />
            <img src={logoEPD} style={{width:"50%"}}  />
          </div>
        </div>
        <hr class="my-4" />
        <h2>Your way into 503rd</h2>
        <br />
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col"> 
            
              <div class="d-grid gap-2">
                <button type="button" class="btn btn-outline-primary" onClick={LinkSRTAppTracker}>Application Tracker</button><br /> 
                <div class="row align-items-start" style={{marginLeft: "1.6%"}}>
                <ApplicationCard type={"SP"} />
                <ApplicationCard type={"P"} />
                <ApplicationCard type={"LO"} />
                <ApplicationCard type={"SRTOO"} />
                <ApplicationCard type={"OS"} />
                <ApplicationCard type={"OG"} />
                </div>
              </div>
              
            </div>
            <div className="col"> 
              
              <div class="d-grid gap-2">
                
                <button type="button" class="btn btn-outline-primary" onClick={LinkEPDAppTracker}>Application Tracker</button><br />
                <div class="row align-items-start" style={{marginLeft: "1.6%"}}>
                <ApplicationCard type={"DO"} />
                <ApplicationCard type={"EPDOO"} />
                <ApplicationCard type={"DS"} />
                <ApplicationCard type={"PO"} />
                </div>
              </div>
             
            </div>
          </div>
        </div>
       
      </div>
      
      
    </>
  );
}



export default Home;
