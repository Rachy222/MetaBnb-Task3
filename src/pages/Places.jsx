import Header from '../components/Header';
import Footer from '../components/Footer';
import Card2  from '../components/Card2';
import LocationIcon from '../images/Location-icon.svg';


function Places() {
    return (
      <>
     <Header />
     <div className='Places-list'>
       <p>Resturant</p>
       <p>Cottage</p>
       <p>Castle</p>
       <p>Fantest city</p>
       <p>Beach</p>
       <p>Carbins</p>
       <p>Off-grid</p>
       <p>Farm</p>
       <button> Location  &nbsp; &nbsp; &nbsp;  <img
          src={LocationIcon}
          className="location-icon"
          alt="hero img"
        /></button>
     </div>

    <div className='Card2-Places-Container'>
        <Card2 />
    </div>
     <div className='Places-footer'>
     <Footer />
     </div>
      </>

    );
}

export default Places;