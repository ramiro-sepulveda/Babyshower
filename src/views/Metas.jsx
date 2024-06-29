import { Card, ProgressBar } from "react-bootstrap";
import { useContext } from "react";
import { BabyContext } from "../context/ContextBaby";

const Metas = () => {
  const { metas, loading } = useContext(BabyContext);

  const sortedMetas = metas.slice().sort((a, b) => b.price - a.price);

  return (
    <>
      {/* <ProgressBar animated now={45} />

      <div className="progress progress-bar-vertical">
        <div
          className="progress-bar progress-bar-animated progress-bar-success progress-bar-striped active"
          role="progressbar"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ height: "70%" }}
        >
          <span className="sr-only">60% Complete</span>
        </div>
      </div> */}

      <div className=" d-flex flex-column align-items-center gap-5 pt-5">
        {sortedMetas.map((el, i) => (
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
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Metas;
