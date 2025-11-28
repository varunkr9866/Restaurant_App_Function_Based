import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavigationBar(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Balraj's Kitchen</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Login</Nav.Link>
                    <Nav.Link href="/restaurant">Restaurant</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}



