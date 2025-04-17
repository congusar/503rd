import React, {useState} from 'react';



function BStaffCarousel(props) {
  return (
    <>
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col">
                    <div class="card" style={{width: "105%"}}>
                       
                        <div class="card-body">
                        <strong><p class="card-text">Commanding Officer</p></strong>
                        <p>{props.BCOname}</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{width: "105%"}}>
                        
                        <div class="card-body">
                        <strong><p class="card-text">Executive Officer</p></strong>
                        <p>{props.BXOname}</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{width: "105%"}}>
                        
                        <div class="card-body">
                            <strong><p class="card-text">Sergeant Major</p></strong>
                            <p>{props.BSMname}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  );
}

export default  BStaffCarousel;