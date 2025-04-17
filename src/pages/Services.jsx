
import '../App.css';

import React, {useState} from 'react';
import FaceImagePlaceholder from '../images/FaceImagePlaceholder.png';
import GeneralCard from '../components/GeneralCard.jsx';

function Dashboard() {
  return (
    <>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <hr class="my-4" />
        <h3>503rd Battalion</h3>
        <h1>Services</h1>
        <hr class="my-3" />
      </div>
      <GeneralCard image={FaceImagePlaceholder} title={"Frank's Therapy Office"} text={"Ever thinking about to discharge? Come to Frank's therapy Office!"} footer={"Head Secretary: AcuNight"} />
      <GeneralCard image={FaceImagePlaceholder} title={"Lvvtqq's Lullaby Singing Course"} text={"Ever feeled depressed? Sad? Lonely? Come to Lvvtqq's Lullaby Singing Course!"} footer={"Instructor: Lvvtqq"} />
      <GeneralCard image={FaceImagePlaceholder} title={"Cong's Promotion Ceremony"} text={"Ever wanted to congratulate those who got newly promoted first? Come to Cong's Promotion Ceremony!"} footer={"Host: Cong_Tviy09"} />
      <GeneralCard image={FaceImagePlaceholder} title={"Zeal's Windows Tech Support"} text={"Is your PC experiencing malfunctions? Is your date and time not correctly shown in the taskbar? Fear not! Zeal's Windows Tech Support is here to help."} footer={"Technican: ZealTheNibbler"} />
    </>
  );
}

export default Dashboard;
