import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import './PomodoroNavbar.css';

function PomodoroNavbar() {
    return (
        <Navbar expand="lg" className='PomodoroNavbar'>
            <Container>
                <LinkContainer to="/home">
                    <Navbar.Brand>Pomodoro Tracker</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <LinkContainer to="/why">
                            <Nav.Link>Why?</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/donate">
                            <Nav.Link>Donate</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PomodoroNavbar;
