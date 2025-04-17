import React, {useState} from 'react';
import serverObject from "../config.js"
import { isDisabled } from '@testing-library/user-event/dist/utils/index.js';
import logo from '../images/logo.svg';
import logo512 from '../images/logo512.png';


function CStaffCarousel(props) {
  return (
    <>
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col">
                    <div class="card" style={{width: "105%"}}>
                       
                        <div class="card-body">
                        <strong><p class="card-text">Commanding Officer</p></strong>
                        <p>{props.CCOname}</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{width: "105%"}}>
                        
                        <div class="card-body">
                        <strong><p class="card-text">Executive Officer</p></strong>
                        <p>{props.CXOname}</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{width: "105%"}}>
                        
                        <div class="card-body">
                            <strong><p class="card-text">First Sergeant</p></strong>
                            <p>{props.CFSname}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  );
}

export default  CStaffCarousel;