
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { DataContext } from "../context/DataProvider";

const Shop = () => {
  useEffect(() => { console.log('SHOP component state has been rendered or re-rendered') });

  const getProductsData = async () => {
    let response = await axios.get('http://127.0.0.1:5000/auth/products');
    return response.status === 200 ? response.data : null;
  }
  const loadProductsData = async () => {
    let data = await getProductsData();
    setProducts(data.products);
  }

  const [products, setProducts] = useState(() => loadProductsData());
  //console.log(products)

  const { cart, setCart } = useContext(DataContext);

  const addProduct = (product) => {
    let newCart = { ...cart };
    newCart.size++;
    newCart.total += parseFloat(product.price);
    newCart.products[product.id] ?
      newCart.products[product.id].quantity++
      :
      newCart.products[product.id] = { data: product, quantity: 1 };
    console.log(newCart);
    setCart(newCart);

  }

  return (
    <div>
      <h1>Ready...Set....SHOP!</h1>
      <hr />
      <div className="container">
        <div className="row">
          {products && products.length ? products.map((p, index) => {
            return <Card key={index} id={p.id} variant="outlined" style={{ width: '18rem' }}>
               <Card.Title><strong>{p.title}</strong></Card.Title>
              <Card.Body>
              <Card.Img variant="top" src={p.image} />
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Description: {p.description}</ListGroup.Item>
                <hr />
                <ListGroup.Item>Price: ${p.price}</ListGroup.Item>
              </ListGroup>
              <hr />
              <Card.Body>
                <Button variant="warning" onClick={() => addProduct(p)}>Add Item</Button>
                <hr />
              </Card.Body>
            </Card>

          })
            :
            <h1>Loading please be patient</h1>

          }

        </div>
      </div>
    </div>

  )
};
export default Shop;






