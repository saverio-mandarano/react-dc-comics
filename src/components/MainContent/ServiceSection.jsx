import buycomicsdigitalcomics from '../../assets/img/buy-comics-digital-comics.png';

export default function ServiceSection() {
  return (
    <section className="service">
      <div className="container">
        <ul>
          
          <li>
            <figure className="flex">
              <a href="#">
                <img src={buycomicsdigitalcomics} alt="" />
              </a>
              <figcaption>DIGITAL COMICS</figcaption>
            </figure>
          </li>

          <li>
            <figure>
              <a href="#">
                <img src="" alt="" />
              </a>
              <figcaption>DC MERCHANDISE</figcaption>
            </figure>
          </li>

          <li>
            <figure>
              <a href="#">
                <img src="" alt="" />
              </a>
              <figcaption>SUBSCRIPTION</figcaption>
            </figure>
          </li>

          <li>
            <figure>
              <a href="#">
                <img src="" alt="" />
              </a>
              <figcaption>COMICS SHOP LOCATOR</figcaption>
            </figure>
          </li>

          <li>
            <figure>
              <a href="#">
                <img src="" alt="" />
              </a>
              <figcaption>DC POWER VISA</figcaption>
            </figure>
          </li>

        </ul>
      </div>
    </section>
  );
}
