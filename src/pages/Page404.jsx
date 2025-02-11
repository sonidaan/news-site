import "./Page404.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Page404() {
  return (
    <div className="Page404 bg-primary text-white d-flex flex-column justify-content-center align-items-center">
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <p className="h4 text-center">
          Avem o știre nu tocmai grozavă... pagina pe care ai încercat să o
          accesezi nu (mai) există.
        </p>
        <strong className="error404">404 :(</strong>
        <p className="h4 text-center">
          <Link to="/" className="text-secondary">
          Hai înapoi pe site să vezi o nouă știre!
          </Link>
        </p>
      </Container>
    </div>
  );
}

export default Page404;
