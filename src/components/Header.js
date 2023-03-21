import { Nav } from 'react-bootstrap'
import logo from '../assets/images/lifeatpeace.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="Life at Peace logo" />
      <Nav className="justify-content-end" style={{ width: "100%" }} activeKey='/home'>
        <Nav.Item>
          <Nav.Link href='/home'>Home</Nav.Link>
          <Nav.Link href='/aboutus'>About Us</Nav.Link>
          <Nav.Link href='/services'>Services</Nav.Link>
          <Nav.Link href='/contact'>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Header
