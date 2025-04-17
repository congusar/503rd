
import '../App.css';
import React, {useState} from 'react';
import GeneralCardWithoutImage from '../components/GeneralCardWithoutImage';


function Beta() {
  return (
    <>
      <br />
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <hr class="my-2" />
        <h3>Beta</h3>
        <h1>Features</h1>
        <hr class="my-4" />
      </div>
      <GeneralCardWithoutImage title="Timestamp Generator" text="" footer="/Beta/TimestampGenerator"/>
    </>
  );
}

export default Beta;
