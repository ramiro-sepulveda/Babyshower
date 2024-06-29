import { useContext } from "react";
import { BabyContext } from "../context/ContextBaby";
import { Button, Card } from "react-bootstrap";

const GaleriaRegalos = () => {
  const { regalos, loading } = useContext(BabyContext);

  const sortedRegalos = regalos.slice().sort((a, b) => b.price - a.price);

  return (
    <>
      <div className=" d-flex flex-column align-items-center gap-5 pt-5">
        {sortedRegalos.map((el, i) => (
          <Card key={i} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={"./" + el.img} />
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>
                Valor Aproximado:<br></br>
                <b>
                  {" "}
                  {"$" +
                    el.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </b>
              </Card.Text>
              <Button className=" text-white" variant="info">
                Regalar
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default GaleriaRegalos;
