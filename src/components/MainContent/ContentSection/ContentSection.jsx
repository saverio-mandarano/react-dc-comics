import comics from './comics'
import Card from '../../Card'

export default function ContentSection() {
  // funzione di rendering prodotti
  const renderProdottiCard = () => {
    return comics.map((comic) => (

      <Card 
        key={comic.id}
        id={comic.id}
        title={comic.title}
        description={comic.description}
        thumb={comic.thumb}
        price={comic.price}
        series={comic.series}
        sale_date={comic.sale_date}
        type={comic.type}
        artists={comic.artists}
        writers={comic.writers}
      />
    ))
  } 

  return (
    <section className='content'>
      <div className='container'>
        <div className="top-left">CURRENT SERIES</div>
        <section id="products">
          <div className="card-container">
            {renderProdottiCard()}
          </div>
        </section>
        <div className="btn">
          <button>LOAD MORE</button>
        </div>
      </div>
    </section>    
  )
}


// export default function ContentSection() {
  // funzione di rendering prodotti
  // const renderProdottiCard = () => {
    // return comics.map((comic) => (

      // <div className= 'card' key={comic.id}>
      //   <img src={comic.thumb}  />
      //   <h5>{comic.series}</h5>
      // </div>
    // ))
  // } 

//   return (
//     <section className='content'>
//       <div className='container'>
//         <div className="top-left">CURRENT SERIES</div>
//         <section id="products">
//           <div className="card-container">
//             {renderProdottiCard()}
//           </div>
//         </section>
//         <div className="btn">
//           <button>LOAD MORE</button>
//         </div>
//       </div>
//     </section>
//   )
// }






