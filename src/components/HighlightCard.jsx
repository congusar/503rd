import React, {useState} from 'react';



function HighlightCard(props) {




  return (
    <>
        <div class="card text-center" style={{width: "40%", margin: "auto", marginTop: "20px"}}>
            <div class="card-header">
                {props.unit}
            </div>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <img src={props.image} className="card-img-top" alt="Loading..." style={{width: "100%"}} />
            </div>
            <div class="card-footer text-muted">
                {props.creator}
            </div>
        </div>
    </>
    
  );
}

export default HighlightCard;