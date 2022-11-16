import React, { useState } from 'react'
import WalletModal from '../components/Wallet-Modal';
import Logo from "../images/Metabnb-logo.svg";
import {NavLink} from 'react-router-dom'

export default function Header() {
  const [show, setShow] = useState(false)
  // const [showHam, setShowHam] = useState(false)
  return (

    <header id="metabnb-head">
      <nav>
        <div class="metabnb-header-logo">
          <img src={Logo} alt="metabnb header logo" />
        </div>
        <div class="metabnb-menu-items">
                <NavLink to={'/'} className="Link" id='Home'>Home</NavLink>
                <NavLink to={'/locations'}  className="Link" id='Places'>Place to stay</NavLink>
                <NavLink to={''} className="Link">NFTs</NavLink>
                <NavLink to={''} className="Link">Community</NavLink>
         </div>
          <div class="metabnb-btn-menu">
            <button onClick={() => setShow(true)} class="header-btn"> Connect Wallet </button>
          </div>
      </nav>
      <WalletModal onClose={() => setShow(false)} show={show} />

    </header>
  );
}