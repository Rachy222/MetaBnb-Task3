import heroImg from "../images/Home-Hero-Img.svg";

export default function Hero() {
    return (
    <>
     <div className="Hero-container">
        <div>
         <h1> Rent a <span className="Purple-header">Place</span> away from <span className="Purple-header">Home</span> in the <span className="Purple-header">Metaverse</span> </h1>
         <p> we provide you access to luxury and affordable houses <br /> in the metaverse, get a chance to turn your  <br /> imagination to reality at your comfort zone</p>
          <div className="Input-section">
            <input
              type="text"
              name=""
              id="first_name"
              placeholder="  &nbsp;Search for location"
              required
            />
            <button> Search</button>
         </div>
        </div>

        <div className="Hero-img-section">
        <img
          src={heroImg}
          className="Hero-img"
          alt="hero img"
        />
        </div>
     </div>

    </>
    );
}