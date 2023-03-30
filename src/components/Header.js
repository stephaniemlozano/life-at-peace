import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/images/LifeAtPeace.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='Life at Peace logo' />
      <Navbar sticky='top'>
        <Container className='nav-container'>
          <Nav className='nav' style={{ width: '100%' }} activeKey='/home'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/services'>Services</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
