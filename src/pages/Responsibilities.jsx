
import '../App.css';
import React, {useState} from 'react';
import GeneralCard from '../components/GeneralCardWithoutImage.jsx';



function Responsibilities() {
  return (
    <>
      <GeneralCard title="Battalion Commanding Officer" text="The Battalion Commanding Officer is responsible for leading the battalion, supervising all officers, group acceptances, graduation logs and administrative priveleges evaluation exams. Additionally the Battalion Commanding Officer hosts events, a mandatory 503rd wide meeting event once a month, performs ORBAT Inspections once a month and he is the one responsible for medal recommendations." footer="" />
      <GeneralCard title="Battalion Executive Officer" text="The Battalion Executive Officer is responsible for assisting the Battalion Commanding Offcer, supervising all officers, group acceptances, graduation logs and administrative priveleges evaluation exams. Additionally the Battalion Executive Officer hosts events, a mandatory CCO meeting event once a month and performs document inspections once a month." footer="" />
      <GeneralCard title="Battalion Sergeant Major" text="The Battalion Sergeant Major is responsible for all enlisteds within the battalion, group acceptances, graduation logs and the battalion wide staff report. Additionally the Battalion Sergeant Major hosts events and a mandatory CFS meeting event once a month." footer="" />
      <GeneralCard title="Company Commanding Officer" text="A Company Commanding Officer is the leader of a company and responsible for the officers within his company. Additionally he accepts LoAs, transfer requests and hosts weekly events. " footer="" />
      <GeneralCard title="Company Executive Officer" text="A Company Executive Officer should assist his Company Commanding Officer when it comes to leading his company. Additionally he accepts LoAs, transfer requests and hosts weekly events. " footer="" />
      <GeneralCard title="Company First Sergeant" text="A Company First Sergeant is responsible for all enlisteds within their company. Additionally he accepts LoAs, transfer request, hosts weekly events and writes the company staff report." footer="" />
      <GeneralCard title="Platoon Leader" text="A Platoon Leader is the highest person within a platoon. He checks arrest logs and applications, updates his ORBAT section, carries out punishments and hosts weekly events for his platoon." footer="" />
      <GeneralCard title="Platoon Adjutant" text="A Platoon Leader is assisting his Platoon Leader. He checks arrest logs and applications, updates his ORBAT section, carries out punishments and hosts weekly events for his platoon." footer="" />
      <GeneralCard title="Platoon Sergeant" text="A Platoon Leader is assisting his Platoon Leader. He checks arrest logs and applications, updates his ORBAT section, carries out punishments and hosts weekly events for his platoon. Addittionally a Platoon Sergeant is responsible for the platoon wide staff report." footer="" />


    </>
  );
}

export default Responsibilities;
