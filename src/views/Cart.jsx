import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Button from 'react-bootstrap/Button';
import '../css/cart.css';
import Card from 'react-bootstrap/Card';


const Cart = () => {
    const { cart, setCart } = useContext(DataContext);

const clearCart = () => {
    setCart({size:0, total:0, products:{}});

}  

const addProduct = (id) => {
    let copyCart = {...cart};
    copyCart.size ++;
    copyCart.total += parseFloat(copyCart.products[id].data.price);
    copyCart.products[id].quantity ++;
    setCart(copyCart);
}

const decreaseProduct = (id) => {
    let copyCart = {...cart};
    copyCart.size --;
    copyCart.total -= parseFloat(copyCart.products[id].data.price);
    copyCart.products[id].quantity > 1 ?
    copyCart.products[id].quantity -- :
    delete copyCart.products[id]
    
    setCart(copyCart);

}
const removeProduct = id => {
    let copyCart = {...cart};
    copyCart.size -= copyCart.products[id].quantity;
    copyCart.total -= copyCart.products[id].quantity*copyCart.products[id].price;
    delete copyCart.products[id];
    setCart(copyCart);
}

    return (
        <>
            <div className="Container">
                <h1>These are the items in your cart:</h1>
                <hr />
                {Object.values(cart.products).map((pro, ind) => {
                    return <Card key={ind} className="text-center">
                    <Card.Header><strong>{pro.data.title}</strong></Card.Header>
                        <Card.Body>
                            <div>
                                <Card.Img className="item-img" variant="top" src={pro.data.image} />
                            </div>
                            <Card.Text>
                                {pro.data.description}
                                <hr />
                                <p>${pro.data.price}</p>
                                <hr />
                                <Button variant="primary" onClick={() => decreaseProduct(pro.data.id)}> -1 </Button>
                                <p>Item Total: {pro.quantity}</p>
                                <Button variant="primary" onClick={() => addProduct(pro.data.id)}> +1 </Button>
                            </Card.Text>
                            <Button variant="danger" onClick={() => removeProduct(pro.data.id)}>Remove from cart</Button>
                            <hr />
                        </Card.Body>
                    </Card>
                })}
            </div>
            <Button variant="danger" onClick={clearCart}>Empty Cart</Button>
        </>

    )
};
export default Cart;








