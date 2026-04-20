
export default function Entry(props) {
 console.log(props)
 return (
  <article className="jornal-entry">
   <div className="main-image-container">
    <img
     src={props.img.src}
     alt={props.img.alt}
    />
   </div>

   <div className="info-container">
    <img className="marker"
     src="./images/pin.png"
     alt="marker icon" />
    <span className="country">{props.country}</span>

    <a href={props.googleMapsLink}>
     View on Google Maps</a>

    <h2 className="entry-title">{props.title}</h2>

    <p className="trip-date">{props.dates}</p>

    <p className="entry-text">
     {props.text}
    </p>

   </div>

  </article>
 )
}