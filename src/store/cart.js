import {observable, computed, action} from 'mobx';


export default class{
    @observable products = []

    constructor(rootStore){
        this.rootStore = rootStore;
    }

    @action localStorageGet() {
      this.products =  JSON.parse(localStorage.getItem('products')) || []
    }

    @computed get productsDetailed(){
        return this.products.map((pr) => {
            let product = this.rootStore.products.getById(pr.id);
            return {...product, cnt: pr.cnt};
        });
    }

    @computed get inCart(){
        return (id) => this.products.some((product) => product.id === id);
    }

    @computed get total(){
        return this.productsDetailed.reduce((t, pr) => {
            return t + pr.price * pr.cnt;

        }, 0);
    }

    @computed get countTotal(){
        return this.productsDetailed.reduce((t, pr) => {
            return t + pr.cnt;
        }, 0);
    }

    @action add(id){
        this.products.push({id, cnt: 1});
        this.localStorageSet(this.products)
    }

    @action change(id, cnt){
        let index = this.products.findIndex((pr) => pr.id === id);

        if(index !== -1){
            this.products[index].cnt = cnt;
        }
        this.localStorageSet(this.products)
    }

    @action remove(id){
        let index = this.products.findIndex((pr) => pr.id === id);

        if(index !== -1){
            this.products.splice(index, 1);
        }
      this.localStorageSet(this.products)

    }

    localStorageSet(products) {
      const obj = [...products]
      const serialObj = JSON.stringify(obj)
      localStorage.setItem('products', serialObj)
    }


}

