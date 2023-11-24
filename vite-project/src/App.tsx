
import {Navbar, Container, Nav} from "react-bootstrap"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand= "lg">
          <Container>
            <Navbar.Brand>DressThetic</Navbar.Brand>
          <Nav>
            <a href="/cart" className="nav-link">Cart</a>
            <a href="/signin" className="nav-link">Sign In</a>
          </Nav>
          </Container>
        </Navbar>
      </header>
    
    <main>
      <Container className="mt-3">
        <Outlet/>

      </Container>
      
    </main>
    <div className="text-center">
      <footer>
       All Rights Reserved
      </footer>
    </div>
    
    </div>
  )
}

export default App
