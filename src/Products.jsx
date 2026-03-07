import { useState, useRef } from "react";
// or less ideally
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Products = ({ productData }) => {
  const [view, setView] = useState({ display: "Flex" });
  const buttonRef = useRef(null);

  const buttonHandler = () => {
    buttonRef.current.innerText = "Hello";
  };
  return (
    <>
      <Button
        onClick={() => setView({ display: "block" })}
        onClick={buttonHandler}
        ref={buttonRef}
      >
        List View
      </Button>
      <Button onClick={() => setView({ display: "flex" })}>Grid View</Button>
      <div style={view}>
        {productData.map((item, index) => (
          <div id={index}>
            <Row>
              <Col xs={6} md={4}>
                <Image src={item.image} alt={item.title} width={50} rounded />
              </Col>
            </Row>

            <div
              style={{
                border: "1px solid",
                background: "bisque",
                padding: "6px",
              }}
            >
              <div style={{ width: "77px" }}>
                <img src={item.image} alt={item.title} width={50} rounded />
              </div>
              <div>
                <ul>
                  <li>Product Name: {item.title}</li>
                  <li>Price: {item.price}</li>
                  <li>Discounted Price: {item.discountedPrice}</li>
                </ul>
                <select>
                  {item.size.map((size, index) => (
                    <option value={size} id={index}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
