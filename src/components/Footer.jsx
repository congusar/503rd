import React, {useState} from 'react';



function Footer(props) {




  return (
    <div class="container">
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="/Services" class="nav-link px-2 text-body-secondary">Services</a></li>
            <li class="nav-item"><a href="/Responsibilities" class="nav-link px-2 text-body-secondary">Responsibilities</a></li>
            <li class="nav-item"><a href="/Highlights" class="nav-link px-2 text-body-secondary">Highlights</a></li>
            <li class="nav-item"><a href="/TimestampGenerator" class="nav-link px-2 text-body-secondary">Timestamps</a></li>
            <li class="nav-item"><a href="/Legal" class="nav-link px-2 text-body-secondary">Legal</a></li>
            </ul>
            <i><p class="text-center text-body-secondary">Created by Noay_HD1</p></i>
        </footer>
    </div>
    
  );
}

export default Footer;