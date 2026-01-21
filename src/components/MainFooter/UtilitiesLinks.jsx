import utilitiesLinks from '../Data/footer-links'

export default function UtilitiesLinks() {

  // funzione di rendering
  const renderUtilitiesLinks = () => {
    return utilitiesLinks.map(section => (
      <div className="links-column" key={section.category}>
        <ul>
          <li>
            <h3>{section.category.toUpperCase()}</h3>
          </li>

          {section.links.map(link => (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <section className="utilities-links">
      <div className="container">
        <div className="links-list">
          {renderUtilitiesLinks()}
        </div>
      </div>
    </section>
  );
}

  
  
  // return (
  //   <section className='utilities-links'>
  //     <div className='container'>
  //       <div className="links-list">
  //         <div className="links-column">
  //           <ul>
  //             <li><h3>DC COMICS</h3></li>
  //             <li><a href="">Characters</a></li>
  //             <li><a href="">Comics</a></li>
  //             <li><a href="">Movies</a></li>
  //             <li><a href="">TV</a></li>
  //             <li><a href="">Games</a></li>
  //             <li><a href="">Videos</a></li>
  //             <li><a href="">News</a></li>
  //           </ul>
  //           <ul>
  //             <li><h3>SHOP</h3></li>
  //             <li><a href="">Shop DC</a></li>
  //             <li><a href="">Shop DC Collectibles</a></li>
  //           </ul>
  //         </div>
  //         <div className="links-column">
  //           <ul>
  //             <li><h3>DC</h3></li>
  //             <li><a href="">Terms of use</a></li>
  //             <li><a href="">{`Privacy policy (New)`}</a></li>
  //             <li><a href="">Ad Choices</a></li>
  //             <li><a href="">Advertising</a></li>
  //             <li><a href="">Jobs</a></li>
  //             <li><a href="">Subscriptions</a></li>
  //             <li><a href="">Talent Workshops</a></li>
  //             <li><a href="">CPSC Certificates</a></li>
  //             <li><a href="">Ratings</a></li>
  //             <li><a href="">Shop Help</a></li>
  //             <li><a href="">Contact Us</a></li>
  //           </ul>
  //         </div>
  //         <div className="links-column">
  //           <ul>
  //             <li><h3>SITES</h3></li>
  //             <li><a href="">DC</a></li>
  //             <li><a href="">MAD Magazine</a></li>
  //             <li><a href="">DC Kids</a></li>
  //             <li><a href="">DC Universe</a></li>
  //             <li><a href="">DC Power Visa</a></li>
  //           </ul>       
  //           </div>
  //         </div>
  //     </div>
  //   </section>
  // )
