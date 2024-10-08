import { useState, useEffect } from 'react';
import { addCloth, deleteCLoth, getCloth } from '../../axios/axios';

import Badge from 'react-bootstrap/Badge';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Admin() {
  const [shopList, setShopList] = useState();
  const [clothName, setClothName] = useState();
  const [clothCost, setClothCost] = useState();

  useEffect(() => {
    getCloth().then((data) => setShopList(data));
  }, []);

  const addClothBtn = (e) => {
    e.preventDefault();
    
    addCloth({ header: clothName, cost: clothCost });
  };

  if (shopList) {
    return (
      <>
        <h1 style={{ color: 'white', fontSize: '20px', marginBottom: '10px' }}>
          Positions List
        </h1>

        {shopList.map((el) => (
          <div
            key={el.id}
            style={{
              margin: '5px',
              display: 'flex',
              width: '400px',
              color: 'white',
              justifyContent: 'space-between',
            }}
          >
            <h1>
              <Badge
                style={{ marginRight: '10px' }}
                bg="danger"
                onClick={() => deleteCLoth(el)}
              >
                Delete
              </Badge>

              {el.header}
            </h1>

            <span>{el.cost}$</span>
          </div>
        ))}

        <Form data-bs-theme="dark">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>CLoth Name</Form.Label>
            <Form.Control
              value={clothName}
              onChange={(e) => setClothName(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>CLoth Cost</Form.Label>
            <Form.Control
              value={clothCost}
              onChange={(e) => setClothCost(e.target.value)}
              type="text"
              placeholder="Enter cost"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={addClothBtn}>
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
