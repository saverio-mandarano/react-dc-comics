import Facebook from '../../assets/img/footer-facebook.png';
import Twitter from '../../assets/img/footer-twitter.png';
import Youtube from '../../assets/img/footer-youtube.png';
import Pinterest from '../../assets/img/footer-pinterest.png';
import Periscope from '../../assets/img/footer-periscope.png';

export default function ContactUsLinks () {

  return (
    <section className='contactus-links'>
      <div className='container'>
        <div className="btn-sign-up">
          <button>SIGN-UP NOW</button>
        </div>
        <div className="follow-us-icons">
          <ul>
              <li><a href="">FOLLOW US</a></li>
              <li><img src={Pinterest} alt="facebook icon" /></li>
              <li><img src={Twitter} alt="" /></li>
              <li><img src={Youtube} alt="" /></li>
              <li><img src={Pinterest} alt="" /></li>
              <li><img src={Periscope} alt="" /></li>
            </ul>  
        </div>        
      </div>
    </section>
  )
}

