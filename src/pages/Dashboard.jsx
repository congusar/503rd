
import '../App.css';
import ScheduledEvent from '../components/ScheduledEvent.jsx';

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
