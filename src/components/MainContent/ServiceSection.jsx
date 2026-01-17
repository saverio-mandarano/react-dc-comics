import DigitalComics from '../../assets/img/buy-comics-digital-comics.png';
import ComicsMerchandise from '../../assets/img/buy-comics-merchandise.png';
import Subscriptions from '../../assets/img/buy-comics-subscriptions.png';
import ShopLocator from '../../assets/img/buy-comics-shop-locator.png';
import PowerVisa from '../../assets/img/buy-dc-power-visa.png';


export default function ServiceSection() {
  return (
    <section className="service">
      <div className="container">
        <ul>
          
          <li>
              <a href="#" className='flex'>
                <div className='img-wrapper'>
                  <img src={DigitalComics} alt="" />
                </div>
                <span>DIGITAL COMICS</span>
              </a>
          </li>
          <li>
              <a href="#" className='flex'>
                <div className='img-wrapper'>
                  <img src={ComicsMerchandise} alt="" />
                </div>
                <span>DC MERCHANDISE</span>
              </a>
          </li>
          <li>
              <a href="#" className='flex'>
                <div className='img-wrapper'>
                  <img src={Subscriptions} alt="" />
                </div>
                <span>SUBSCRIPTION</span>
              </a>
          </li>
          <li>
              <a href="#" className='flex'>
                <div className='img-wrapper'>
                  <img src={ShopLocator} alt="" />
                </div>
                <span>COMIC SHOP LOCATOR</span>
              </a>
          </li>
          <li>
              <a href="#" className='flex'>
                <div className='img-wrapper'>
                  <img src={PowerVisa} alt="" className='big'  />
                </div>
                <span>DC POWER VISA</span>
              </a>
          </li>

          

        </ul>
      </div>
    </section>
  );
}
