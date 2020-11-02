import React from 'react';
import AppMinMax from '~c/inputs/minmax';
import withStore from '~/hocs/withStore';

class Cart extends React.Component{

    render(){
        let cartModel = this.props.stores.cart;
        let productsRows = cartModel.productsDetailed.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax
                            min={1}
                            max={product.maxPerPerson}
                            cnt={product.cnt}
                            onChange={(cnt) => cartModel.change(product.id, cnt)}
                        />
                    </td>
                    <td>{product.price * product.cnt}</td>
                    <td>
                        <button onClick={() => cartModel.remove(product.id)}>
                            X
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            <div>
              <h2>В корзине {cartModel.countTotal} товаров на сумму {cartModel.total}</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {productsRows}
                    </tbody>
                </table>

                <hr/>
            </div>
        );
    }
}
export default withStore(Cart);
