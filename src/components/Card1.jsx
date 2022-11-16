import Place1 from '../images/Place1.svg';
import Place2 from '../images/Place2.svg';
import Place3 from '../images/Place3.svg';
import Place4 from '../images/Place4.svg';
import Place5 from '../images/Place5.svg';
import Place6 from '../images/Place6.svg';
import Place7 from '../images/Place7.svg';
import Place8 from '../images/Place8.svg';


export default function Card1 (){
    return (
     <div className='Card-container'>
       <img
          src={Place1}
          className="Hero-img"
          alt="hero img"
        />

        <img
          src={Place2}
          className="Hero-img"
          alt="hero img"
        />

         <img
          src={Place3}
          className="Hero-img"
          alt="hero img"
        />

         <img
          src={Place4}
          className="Hero-img"
          alt="hero img"
        />

        <img
          src={Place5}
          className="Hero-img"
          alt="hero img"
        />

          <img
          src={Place6}
          className="Hero-img"
          alt="hero img"
        />

         <img
          src={Place7}
          className="Hero-img"
          alt="hero img"
        />

        <img
          src={Place8}
          className="Hero-img"
          alt="hero img"
        />


     </div>
    );
}