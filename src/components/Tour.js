// cspell:disable
export const Tour = (props) => {
  return (
    <article className="tour-card">
      <ImgContainer props={props}></ImgContainer>
      <TourInfo props={props}></TourInfo>
    </article>
  )
}

const ImgContainer = (props) => {
  const { img, date } = props.props.tour
  return (
    <div className="tour-img-container">
      <img src={img} className="tour-img" alt="tour-img" />
      <p className="tour-date">{date}</p>
    </div>
  )
}

const TourInfo = (props) => {
  const { title, text } = props.props.tour
  return (
    <div className="tour-info">
      <div className="tour-title">
        <h4>{title}</h4>
      </div>
      <p>{text}</p>
      <Footer props={props}></Footer>
    </div>
  )
}

const Footer = (props) => {
  const { country, duration, price } = props.props.props.tour
  return (
    <div className="tour-footer">
      <p>
        <span>
          <i className="fas fa-map"></i>
        </span>
        {country}
      </p>
      <p>{duration}</p>
      <p>{price}</p>
    </div>
  )
}
