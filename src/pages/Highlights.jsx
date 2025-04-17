
import '../App.css';
import React, {useState} from 'react';
import HighlightCard from '../components/HighlightCard.jsx';

//images
import DischargeDenierCorps from '../images/Highlights/Acu_visit_card.png'
import DischargeDenierCorps2 from '../images/Highlights/Lv_visit_card.png'
import EpdAlways from '../images/Highlights/Fake_Text_Chat_With_boss_by_aicut.png'
import HelicopterWedge from '../images/Highlights/HelicopterWedge.png'


function Highlights() {
  return (
    <>
      <br />
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <hr class="my-2" />
        <h3>Community</h3>
        <h1>Highlights</h1>
        <hr class="my-4" />
      </div>
      <HighlightCard title="Discharge Deniers Corps" unit="Executive Protection Detail" image={DischargeDenierCorps} creator="Acu_Night"/>
      <HighlightCard title="Discharge Deniers Corps" unit="Executive Protection Detail" image={DischargeDenierCorps2} creator="Acu_Night"/>
      <HighlightCard title="EPD, always!" unit="Executive Protection Detail" image={EpdAlways} creator="i1_qr"/>
      <HighlightCard title="MPC RRAU x ASOC SOAR Aerial Patrol" unit="Rapid Response Aviation Unit" image={HelicopterWedge} creator="Jaguar_1277"/>
    </>
  );
}

export default Highlights;
