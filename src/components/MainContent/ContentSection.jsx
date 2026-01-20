import comics from './comics'

export default function ContentSection() {
  // funzione di rendering prodotti
  const renderProdottiCard = () => {
    return comics.map((comic) => (
      <div className= 'card' key={comic.id}>
        <img src={comic.thumb}  />
        <h5>{comic.series}</h5>
      </div>
    ))
  } 
// alt={comic.description}
  return (
    <section className='content'>
      <div className='container'>
        <section id="products">
          <div className="card-container">
            {renderProdottiCard()}
          </div>
        </section>
      </div>
    </section>
  )
}






