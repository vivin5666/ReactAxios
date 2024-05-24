import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Topbar() {
    let navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>
              <h5>
                <b>Dashboard</b>
              </h5>
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/create")}>
              <h5>
                <b>Create</b>
              </h5>
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <h5>User Data</h5>
              
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;