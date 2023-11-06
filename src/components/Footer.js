// cspell:disable
import { Link } from './Link'
import { pageLinks, icons } from '../data'
import { Icon } from './Icon'

export const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return <Link link={link} key={link.id} selector={'footer'}></Link>
        })}
      </ul>
      <ul className="footer-icons">
        {icons.map((icon) => {
          return <Icon link={icon} key={icon.id} selector={'footer'}></Icon>
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}
