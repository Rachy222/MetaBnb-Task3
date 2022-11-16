import hero2Img from "../images/NFTs-img.svg";

export default function Hero2() {
  return(
    <div className="Hero2-container">
        <div>
         <h2> Metabnb NFTs </h2>
         <p> Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
          <div>
            <button> Learn more</button>
         </div>
        </div>

        <div className="Hero2-img-section">
        <img
          src={hero2Img}
          className="Hero2-img"
          alt="hero img"
        />
        </div>
     </div>
  );

}