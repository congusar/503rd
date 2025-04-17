import React, {useState} from 'react';



function DeploymentCard(props) {
  return (
    <>
       <div className="card" style={{width: "25%", margin: "auto", marginTop: "20px"}}>
            <img src={props.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <div className="container">
                <div className="row">
                    {props.medals.map((medal, index) => (
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 mb-2 d-flex justify-content-center" key={index}>
                        <img
                        src={medal}
                        alt={`Medal ${index}`}
                        className="img-fluid"
                        style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                            borderRadius: "8px",
                        }}
                        />
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
                
    </>
  );
}

export default  DeploymentCard;