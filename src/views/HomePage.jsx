import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="inicio">
        <h1 className="pt-5 ps-4">
          Lista de Regalos <br />
          <b>BabyShower</b>
        </h1>
        <Container className="d-flex gap-2 py-5">
          <p className=" fs-5">
            Explicación de la pagina, saludos de Cata y Rami.{" "}
          </p>
          <img src="./bebe.jpg" alt="" />
        </Container>
        <div className="text-center">
          <Button
            variant="outline-info"
            onClick={() => {
              console.log("Info");
              navigate(`/babyshower/regalos/`);
            }}
          >
            Elige tu Regalo
          </Button>
        </div>
      </div>

      <h1>Meta Actual</h1>



      <h1>Meta Anterior</h1>
    </>
  );
};

export default HomePage;
