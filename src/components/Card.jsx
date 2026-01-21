export default function Card ({comic: { id, title, description, thumb, price, series, sale_date, type, artists, writers } }) {
    return (
        <div className="card" >
            <img src={thumb} alt={title} />
            <h5>{series}</h5>
            <p>{price || "prezzo non disponibile"}</p>
        </div>
    )
}


// export default function Card (props) {
    
//     const { id, title, description, thumb, price, series, sale_date, 
//         type, artists, writers } = props.comic;

// const title = props.title;
