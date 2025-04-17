
import '../App.css';
import React, { useState, useEffect, Component,  } from 'react';
import { useRef } from 'react';
import GeneralCard from '../components/GeneralCardWithoutImage.jsx';
import UnixTime from '../utilities/UnixTime.js';


function TimestampGenerator() {
  const intervalRef = useRef(null);

  const [output, setOutput] = useState('');
  const [date, setDate] = useState(''); 
  const [type, setType] = useState('t'); // Initialize type with default value 't'
  var preparedOutput = '';
  var dateUnix = '';

  const copy = () => {
    navigator.clipboard.writeText(output);
  };

  

  const update = () => {
    dateUnix = UnixTime.toUnixTime(date)  
    preparedOutput = UnixTime.ConvertUNIXtoDC(dateUnix, type);
    setOutput(preparedOutput);
  };

  useEffect(() => {
    update(); // Call update function whenever date or type changes
  }, [date, type]); // Update output whenever date or type changes

 
  

  return (
    <>
    <form>
      <div className="mb-3">
        <p htmlFor="date" className="form-label" style={{width: "12%", marginLeft: "auto", marginRight: "auto", marginTop: "1%"}}>Date</p>
        <input type='datetime-local' className='form-control' style={{width: "12%", margin: "auto", marginTop: "0"}} id='date' value={date} onChange={(e) => {setDate(e.target.value)}}  />
        
        <div class="input-group mb-3" style={{width: "12%", marginLeft: "auto", marginRight: "auto", marginTop: "1%", textAlign: "center"}}>
          <input id='Output' type="text" class="form-control" placeholder="Timestamp" aria-label="Recipient's username" aria-describedby="button-addon2" disabled readonly value={output} onChange={(e) => {setOutput(e.target.value)}}   style={{textAlign: "center"}} />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={copy} >Copy</button>
        </div>

        <div class="form-check" style={{width: "10%", marginLeft: "auto", marginRight: "auto", marginTop: "1%"}}>
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" value='t' onChange={(e) => setType(e.target.value)}  />
          <label class="form-check-label">
            Time
          </label>
          <br />
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" value='T' onChange={(e) => setType(e.target.value)} />
          <label class="form-check-label">
            Time (Exact)
          </label>
          <br />
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault3" value='d' onChange={(e) => setType(e.target.value)} />
          <label class="form-check-label">
            Date
          </label>
          <br />
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault4" value='D' onChange={(e) => setType(e.target.value)} />
          <label class="form-check-label">
            Date (Long)
          </label>
          <br />
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault5" value='f' onChange={(e) => setType(e.target.value)} />
          <label class="form-check-label">
            Date + Time
          </label>
          <br />
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault6" value='F' onChange={(e) => setType(e.target.value)} />
          <label class="form-check-label">
            Day + Date + Time
          </label>
          <br />
          <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault7" value='R' onChange={(e) => setType(e.target.value)} />
          <label class="form-check-label">
            Relative
          </label>
        </div>
      </div>
    </form>
    
      
      


    </>
  );
}

export default TimestampGenerator;
