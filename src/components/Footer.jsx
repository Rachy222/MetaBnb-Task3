import footerLogo from "../images/Metabnb-footer-logo.svg";
import facebook from "../images/Facebook-icon.svg";
import instagram from "../images/Instagram-icon.svg";
import twitter from "../images/Twitter-icon.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <footer className="metabnb-footer">
      <div className="Logo-div">
        <img
          src={footerLogo}
          className="Footer-logo"
          alt="metabnb footer logo"
        />
        <div>
          <img src={facebook} className="Footer-icon" alt="metabnb footer logo" /> &nbsp; &nbsp;
          <img src={instagram} className="Footer-icon" alt="metabnb footer logo" /> &nbsp; &nbsp;
          <img src={twitter} className="Footer-icon" alt="metabnb footer logo" /> &nbsp; &nbsp;
        </div>
        <p className="Footer-paragraph"> &#169; 2022 Metabnb </p>
      </div>

      <div>
        <h3 className="Footer-header"> Community</h3>
        <NavLink to={""} className="Footer-Link">
          NFT
        </NavLink>
        <NavLink to={""} className="Footer-Link">
          Tokens
        </NavLink>
        <NavLink to={""} className="Footer-Link">
          Landlords
        </NavLink>
        <NavLink to={""} className="Footer-Link">
          Discord
        </NavLink>
      </div>

      <div>
      <h3 className="Footer-header">Places</h3>
        <NavLink to={""} className="Footer-Link">
          Castle
        </NavLink>
        <NavLink to={""} className="Footer-Link">
          Farms
        </NavLink>
        <NavLink to={""} className="Footer-Link">
          Beach
        </NavLink>
        <NavLink to={""} className="Footer-Link">
          Learn more
        </NavLink>
      </div>

      <div>
      <h3 className="Footer-header"> About us</h3>
        <NavLink to={""} className="Footer-Link">
          Road map
        </NavLink>
        <NavLink to={""} className="Footer-Link">
          Creators
        </NavLink>
        <NavLink to={""} className="Footer-Link">
          Career
        </NavLink>
        <NavLink to={""} className="Footer-Link">
          Contact us
        </NavLink>
      </div>
    </footer>

<div className="Footer-mobile-container">
<img
    src={footerLogo}
    className="Footer-mobile"
    alt="metabnb footer logo"
  />
  <div className="Footer-icon-mobile">
    <img src={facebook} className="Footer-icon" alt="metabnb footer logo" /> &nbsp; &nbsp;
    <img src={instagram} className="Footer-icon" alt="metabnb footer logo" /> &nbsp; &nbsp;
    <img src={twitter} className="Footer-icon" alt="metabnb footer logo" />  &nbsp; &nbsp;
   <div> <p className="Footer-mobile-paragraph"> &#169; 2022 Metabnb </p></div>
  </div>

</div>
</>
  );
}
