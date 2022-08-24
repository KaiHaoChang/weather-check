import React from 'react'
import {Container, Nav, Navbar, Button} from 'react-bootstrap'

const Navbars = ({language, setLanguage}) => {
  return (
      <Navbar bg="dark" variant="dark" style={{padding:'20px'}}>
        <Container>
          <Navbar.Brand><h2>{language ? '天氣觀察站' : 'Weather Web'}</h2></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link target='_blank' href="https://kaihaochang.netlify.app">{language?'個人網頁':'My Web'}</Nav.Link>
            <Button variant="dark" onClick={()=>setLanguage(!language)}>{language?'English':'中文'}</Button>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navbars