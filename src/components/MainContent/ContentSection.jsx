import comics from './comics'

export default function ContentSection() {
  // funzione di rendering prodotti
  const renderProdottiCard = () => {
    return comics.map((comic) => (
      <div className="prod-card" key={comic.id}>
        <img src={comic.thumb} alt={comic.description} />
        <h3>{comic.series}</h3>
      </div>
    ))
  }

  return (
      <section className='content'>
        <div className='container'>
                  <section id="products">
            <h2>Lista prodotti</h2>

            <div className="container-custom card-container">

                {renderProdottiCard()}


            </div>

        </section>
        </div>
      </section>
  )
}






