// cspell:disable
import logo from '../images/logo.svg'
import { pageLinks, icons } from '../data'
import { Link } from './Link'
import { Icon } from './Icon'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links " id="nav-links">
          {pageLinks.map((link) => {
            return <Link link={link} key={link.id} selector={'nav'}></Link>
          })}
        </ul>

        <ul className="nav-icons">
          {icons.map((icon) => {
            return <Icon link={icon} key={icon.id} selector={'nav'}></Icon>
          })}
        </ul>
      </div>
    </nav>
  )
}
