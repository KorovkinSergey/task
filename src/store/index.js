import cartStore from './cart';
import productsStore from './products';

import * as products from '~/api/products'


class RootStore{
    constructor(){
        this.api = {
            products
        }

        this.cart = new cartStore(this);
        this.products = new productsStore(this);
    }
}

export default new RootStore();
