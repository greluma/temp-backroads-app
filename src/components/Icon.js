// cspell:disable
export const Icon = (props) => {
  const { href, iClass } = props.link
  const selector = `${props.selector}-link`
  return (
    <li>
      <a href={href} className={selector} target="_blank" rel="noreferrer">
        <i className={iClass}></i>
      </a>
    </li>
  )
}
