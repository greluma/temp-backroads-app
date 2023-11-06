// cspell:disable

export const Service = (props) => {
  //   console.log(props)
  const { iClass, title, text } = props.service
  return (
    <article className="service">
      <span className="service-icon">
        <i className={iClass}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  )
}
