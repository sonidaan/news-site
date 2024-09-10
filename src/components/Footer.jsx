import Container from "react-bootstrap/Container";

function Footer() {
 
 const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark">
      <Container>
        <p className="text-light text-center m-0 py-3">
          IT School România © {currentYear}. Toate drepturile rezervate.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
