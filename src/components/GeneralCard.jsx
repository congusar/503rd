import React, {useState} from 'react';



function GeneralCard(props) {




  return (
    <>
      <div className="d-flex justify-content-center" style={{ marginTop: "20px" }}>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={props.image} className="img-fluid rounded-start" alt="Loading..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <p className="card-text"><small className="text-muted">{props.footer}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default GeneralCard;