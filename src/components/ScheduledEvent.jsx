import React, {useState} from 'react';
import serverObject from "../config.js"




function ScheduledEvent(props) {
const [attendees, setAttendees] = useState(0);
const [isAttending, setIsAttending] = useState(false);


    const [isDisabled, setIsDisabled] = useState(false);


const ButtonCooldown = () => {
    setIsDisabled(true);
    setTimeout(() => {
        setIsDisabled(false);
        
    }, 5000);
}


const attend = () => {
    if(isAttending){
        setAttendees(attendees-1);
        serverObject.send("unattend", props.id);
    }else{
        setAttendees(attendees+1);
        serverObject.send("attend", props.id);
    }
    toggleAttend();
    ButtonCooldown();
}
const toggleAttend = () => {
    setIsAttending(!isAttending);
};

const report = () => {
    if (window.confirm("Are you sure you want to report this event? False reports can lead to consequences.")) {
        alert("Event has been reported");
        serverObject.send("report", props.id);
    }
}

const join = () => {
    window.open(props.link, "_blank");
}
  return (
    <div className="col align-self-center d-flex justify-content-center align-items-center " style={{margin:"1%"}}>
        <div className='card' style={	{width: '18rem'}}>
            <img src={props.img} className='card-img-top' alt='Image of the event' style={{width:"100%",height:"100px", objectFit: "cover"}}/>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{props.description}</p>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-warning btn-primary" onClick={attend} id='btn01' data-bs-toggle="button" disabled={isDisabled ? "enabled" : ""} >{isAttending ? "Attend ✅" : "Attend ❎"}</button>
                    <button type="button" className="btn btn-danger" onClick={report}>Report</button>
                    <button type="button" className="btn btn-success" onClick={join}>Join</button>
                </div>
                <i><footer style={{fontSize:"70%", color:"gray"}}>Attendeees: {attendees} </footer></i>
            </div>

        </div>
    </div>
  );
}

export default ScheduledEvent;