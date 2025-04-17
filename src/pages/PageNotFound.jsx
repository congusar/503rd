
import '../App.css';
import React, {useState} from 'react';


function PageNotFound() {
    const BackToMainPage = () => {
        window.location.href = "/";
    }
    
  return (
    <>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <hr class="my-5" />
            <h3>Error: 404</h3>
            <h1>Page could not be found!</h1>
            <hr class="my-3" />
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button" onClick={BackToMainPage}>Return to Homepage</button>
            </div>
            <hr class="my-4" />
            <figure>
                <blockquote class="blockquote">
                    <p>You’ve summoned… absolutely nothing. Congrats!</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    ChatGPT 09/04/25
                </figcaption>
            </figure>
        </div>
    </>
  );
}

export default PageNotFound;
