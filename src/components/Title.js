export const Title = (props) => {
  const [...title] = props.list
  //   console.log(title)
  return (
    <div className="section-title">
      <h2>
        {title[0]} <span>{title[1]}</span>
      </h2>
    </div>
  )
}
