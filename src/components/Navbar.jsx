import React, {useState} from 'react';
import serverObject from "../config.js"
import { isDisabled } from '@testing-library/user-event/dist/utils/index.js';
import logo from '../images/logo.svg';
import logo512 from '../images/logo512.png';
import SearchBar from './Searchbar.jsx';
import StandardModal from './StandardModal.jsx';

function Navbar(props) {




  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="/"><img src={logo512} style={{width:"48px", height:"48px"}} /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Group
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="https://www.roblox.com/communities/8124498/5O3rd-Battalion#!/about">503rd</a></li>
                <li><a class="dropdown-item" href="https://www.roblox.com/communities/4929233/ilitary-Police-Corps#!/affiliates">MPC</a></li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="https://www.roblox.com/communities/3108077/United-States-Army#!/about">USAR</a></li>
            </ul>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true" href='/Dashboard'>Dashboard</a> {/* nav-link, to enable it. */}
            </li>
        </ul>
            <SearchBar />
            
        </div>
    </div>
    </nav>
    
  );
}

export default Navbar;