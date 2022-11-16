import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero  from '../components/Hero';
import Hero2  from '../components/Hero2';
import Card1  from '../components/Card1';
import MbToken from '../images/MBToken.svg';
import MetaMask from '../images/METAMASK.svg';
import OpenSea from '../images/OpenSea.svg';



// import CardHome from '../components/CardHome'
// import MetaBNB from '../components/MetaBNB'
// import Hero from '../components/Hero'

function Home() {
  return (
    <>
      <Header />
      <main>
      <Hero />
      <div className='Description-container'>
      <img
          src={MbToken}
          className="Hero-img"
          alt="hero img"
        />

         <img
          src={MetaMask}
          className="Hero-img"
          alt="hero img"
        />

         <img
          src={OpenSea}
          className="Hero-img"
          alt="hero img"
        />
      </div>

      <h2 className='Home-header2'> Inspiration for your next adventure </h2>
      <Card1 />
      <Hero2 />
      </main>

    <div>
     <Footer />
    </div>
    </>
  );
}

export default Home;
