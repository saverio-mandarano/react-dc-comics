export default function Card (props) {
    const { id, title, description, thumb, price, series, sale_date, type, artists, writers } = props;

    return (
        <div className="card" >
            <img src={thumb} alt={title} />
            <h5>{series}</h5>
        </div>
    )
}
