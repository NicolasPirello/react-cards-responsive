function Card ( {title, description, image, url} ) {

    return (

        <div className="card-general animate__animated animate__fadeInUp">

            <div className="cardImageOverflow">
                <img src={image} alt="" />
            </div>

            <div className="cardContainer">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={url} target="_blank" ><button>Visitar el Link</button></a>
            </div>

        </div>
    )

}

export default Card;