import React, {useState} from 'react';

import imagePlaceholder from '../images/PositionImagePlaceholder.png';


function ApplicationCard(props) {
    

    const LinkEPDDetailOfficerApp = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfQiwymAC-f3rexnBQ3wMHzk1mBXWygBAtJRseTH4Q-vztEAQ/closedform");
    }

    const LinkEPDOperationsOfficerApp = () => { 
    window.open("https://docs.google.com/forms/d/1t7LPP4ySLFk6x5jPLl-Ec_APcZF0-PY8mY12KVX-Iko/viewform?pli=1&pli=1&edit_requested=true");
    }

    const LinkEPDDetailSergeantApp = () => {  
    window.open("https://docs.google.com/forms/d/1gwSTjj73vlhhUW9zZO7SGSM7HkccWBO8nrzxMliNwyE/edit?usp=forms_home&ths=true");
    }

    const LinkEPDEntryApp = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScy6JUCvI4vA5QlolZSNFRmM1i-tBv_6YjtwVD4wNIbz2zdnQ/viewform?usp=sf_link");
    }
    
    

    const LinkSRTOperationsOfficerApp = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfBA-Xz5M3Muplm3vQgc6gPwAfkJm_RqEvEemfpktPD_lEPkQ/viewform?usp=sharing");
    }

    const LinkSRTLogisticsOfficerApp = () => {  
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSee35wa3BK4Y0-Slq2NL5E_s7i23ufbR0wgM3r9kZPcyozoEg/viewform");
    }

    const LinkSRTOperationsSergeantApp = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSecqb-SqAGFCZtCDfvqkwIUnw90uGpGTe6nXJ7WQDhuUkIeEg/viewform?usp=sharing");
    }

    const LinkSRTEntryApp = () => {
    window.open("");
    }

    const LinkSRTSeniorPilotApp = () => {
    window.open("https://docs.google.com/forms/d/1mLwEH4LO7km7udJagHORG9to4S6kj5G531YITb5jhb4/edit?pli=1");
    }

    const LinkSRTPilotApp = () => {
    window.open("https://docs.google.com/forms/d/1f77NOyaJX2gSzpsTWAGRAwfLqKkhupXn02Im60izgKk/edit?ts=67b224bf");
    }



return (
    <>
        {props.type === "LO" && (
            <div className="card" style={{ width: "18rem", margin: "1%" }}>
                <img src={imagePlaceholder} className="card-img-top" alt="Loading..." />
                <div className="card-body">
                    <h5 className="card-title">Logistics Officer</h5>
                    <p className="card-text">
                        Logistics Officers are part of the logistic unit of SRT. They are tasked with logging and other logistical tasks.
                    </p>
                    <button type="button" className="btn btn-outline-light" onClick={LinkSRTLogisticsOfficerApp}>
                        Application
                    </button>
                </div>
            </div>
        )}
        {props.type === "SRTOO" && (
            <div className="card" style={{ width: "18rem", margin: "1%" }}>
                <img src={imagePlaceholder} className="card-img-top" alt="Loading..." />
                <div className="card-body">
                    <h5 className="card-title">Operations Officer</h5>
                    <p className="card-text">
                        Operations Officers are responsible for overseeing and managing operational tasks within SRT.
                    </p>
                    <button type="button" className="btn btn-outline-light" onClick={LinkSRTOperationsOfficerApp}>
                        Application
                    </button>
                </div>
            </div>
        )}
        {props.type === "OS" && (
            <div className="card" style={{ width: "18rem", margin: "1%" }}>
                <img src={imagePlaceholder} className="card-img-top" alt="Loading..." />
                <div className="card-body">
                    <h5 className="card-title">Operations Sergeant</h5>
                    <p className="card-text">
                        Operations Sergeants assist in managing and coordinating operational activities within SRT.
                    </p>
                    <button type="button" className="btn btn-outline-light" onClick={LinkSRTOperationsSergeantApp}>
                        Application
                    </button>
                </div>
            </div>
        )}
        {props.type === "OG" && (
            <div className="card" style={{ width: "18rem", margin: "1%" }}>
                <img src={imagePlaceholder} className="card-img-top" alt="Loading..." />
                <div className="card-body">
                    <h5 className="card-title">Entry Application</h5>
                    <p className="card-text">
                        Entry-level positions for individuals looking to join the Special Reaction Team.
                    </p>
                    <button type="button" className="btn btn-outline-light" onClick={LinkEPDEntryApp}>
                        Application
                    </button>
                </div>
            </div>
        )}
        {props.type === "SP" && (
            <div className="card" style={{ width: "18rem", margin: "1%" }}>
                <img src={imagePlaceholder} className="card-img-top" alt="Loading..." />
                <div className="card-body">
                    <h5 className="card-title">Senior Pilot</h5>
                    <p className="card-text">
                        Senior Pilots are experienced pilots responsible for advanced flight operations.
                    </p>
                    <button type="button" className="btn btn-outline-light" onClick={LinkSRTSeniorPilotApp}>
                        Application
                    </button>
                </div>
            </div>
        )}
        {props.type === "P" && (
            <div className="card" style={{ width: "18rem", margin: "1%" }}>
                <img src={imagePlaceholder} className="card-img-top" alt="Loading..." />
                <div className="card-body">
                    <h5 className="card-title">Pilot</h5>
                    <p className="card-text">
                        Pilots are responsible for operating aircraft and ensuring safe flight operations.
                    </p>
                    <button type="button" className="btn btn-outline-light" onClick={LinkSRTPilotApp}>
                        Application
                    </button>
                </div>
            </div>
        )}
        {props.type === "DO" && (
            <div className="card" style={{ width: "18rem", margin: "1%" }}>
                <img src={imagePlaceholder} className="card-img-top" alt="Loading..." />
                <div className="card-body">
                    <h5 className="card-title">Detail Officer</h5>
                    <p className="card-text">
                     Detail Officers are part of the logistic unit of EPD. They are tasked with logging and other logistical tasks.
                    </p>
                    <button type="button" className="btn btn-outline-light" onClick={LinkEPDDetailOfficerApp}>
                        Application
                    </button>
                </div>
            </div>
        )}
        {props.type === "EPDOO" && (
            <div className="card" style={{ width: "18rem", margin: "1%" }}>
                <img src={imagePlaceholder} className="card-img-top" alt="Loading..." />
                <div className="card-body">
                    <h5 className="card-title">Operations Officer</h5>
                    <p className="card-text">
                        EPD Operations Officers manage and oversee operational tasks within the EPD unit.
                    </p>
                    <button type="button" className="btn btn-outline-light" onClick={LinkEPDOperationsOfficerApp}>
                        Application
                    </button>
                </div>
            </div>
        )}
        {props.type === "DS" && (
            <div className="card" style={{ width: "18rem", margin: "1%" }}>
                <img src={imagePlaceholder} className="card-img-top" alt="Loading..." />
                <div className="card-body">
                    <h5 className="card-title">Detail Sergeant</h5>
                    <p className="card-text">
                        Detail Sergeants assist in managing and coordinating tasks within their detail unit.
                    </p>
                    <button type="button" className="btn btn-outline-light" onClick={LinkEPDDetailSergeantApp}>
                        Application
                    </button>
                </div>
            </div>
        )}
        {props.type === "PO" && (
            <div className="card" style={{ width: "18rem", margin: "1%" }}>
                <img src={imagePlaceholder} className="card-img-top" alt="Loading..." />
                <div className="card-body">
                    <h5 className="card-title">Entry Application</h5>
                    <p className="card-text">
                        Entry-level positions for individuals looking to join the Executive Protection Detail.
                    </p>
                    <button type="button" className="btn btn-outline-light" onClick={LinkEPDEntryApp}>
                        Application
                    </button>
                </div>
            </div>
        )}
    </>
);
}

export default ApplicationCard;