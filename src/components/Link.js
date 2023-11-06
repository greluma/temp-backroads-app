export const Link = (props) => {
  const { href, text } = props.link
  const selector = `${props.selector}-link`
  return (
    <li>
      <a href={href} className={selector}>
        {text}
      </a>
    </li>
  )
}
