import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './index.module.css';
import {observer, inject} from 'mobx-react';

@inject('stores') @observer class Products extends React.Component{
    render(){
        let productModel = this.props.stores.products;
        let cart = this.props.stores.cart;

        let productsCards = productModel.items.map((product) => {
            let btn;

            if(cart.inCart(product.id)){
                btn = <Button variant="danger" onClick={() => cart.remove(product.id)}>
                    Удалить из корзины
                </Button>
            }
            else{
                btn = <Button variant="success" onClick={() => cart.add(product.id)}>
                    Добавить в корзину
                </Button>
            }

            return <div className={'col col-4 ' + styles.col} key={product.id}>
                <Card>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            <strong>На складе: {product.amount}</strong>
                        </Card.Text>
                        <Card.Text>
                            <strong>Максимум в корзину: {product.maxPerPerson} </strong>
                        </Card.Text>
                        <Card.Text>
                            <strong>Цена: {product.price}</strong>
                        </Card.Text>

                        <hr/>
                        {btn}
                    </Card.Body>
                </Card>
            </div>
        });

        return (
            <div>
                <h1>Список товаров</h1>
                <div className="row">
                    {productsCards}
                </div>
            </div>
        );
    }
}

export default Products;
