import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="info" variant="dark">
      <Container className="justify-content-start gap-2">
        <Link
          to="/babyshower/"
          className="text-white ms-3 text-decoration-none"
        >
          Home
        </Link>
        <Link
          to="/babyshower/metas/"
          className="text-white ms-3 text-decoration-none"
        >
          Metas
        </Link>
        <Link
          to="/babyshower/regalos/"
          className="text-white ms-3 text-decoration-none"
        >
          Regalos
        </Link>
      </Container>
      <Container className=" justify-content-end">
        <Navbar.Brand>
          <Link
            to="/babyshower/"
            className="text-white ms-3 text-decoration-none"
          >
            C<b style={{ fontSize: "15px" }}>&</b>R
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;
