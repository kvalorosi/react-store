import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navm() {
    return (
        <>
            <Navbar bg="info" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Shop Till' You Drop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="navbar-brand" to="/">Home</Link>
                        <Link className="navbar-brand" to="/shop">Shop</Link>
                        <Link className="navbar-brand" to="/cart">Cart</Link>
                    </Nav>
                </Container>
            </Navbar>








        </>
    );
}

export default Navm;