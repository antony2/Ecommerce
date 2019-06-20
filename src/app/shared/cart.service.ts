import { element } from 'protractor';
import { CartProduct } from './../shopping-cart/cart-product';
import { Product } from './../products/product';
import { SessionService } from './session.service';
import { Cart } from './../shopping-cart/cart';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CartService {
  cart: Cart;
  publish: Subject<Cart>;

  constructor(private ss: SessionService) {
    this.publish = new Subject<Cart>();
    var sCart = localStorage.getItem('cartdata');
    if (sCart) this.cart = JSON.parse(sCart);
    else {
      this.cart = new Cart(this.ss.getCurrentUser());
      localStorage.setItem('cleardata', JSON.stringify(this.cart));
    }
  }

  getCart() {
    return this.publish.asObservable();
  }

  getCartData() {
    var sCart = localStorage.getItem('cartdata');
    if (sCart) this.cart = JSON.parse(sCart);
    return this.cart;
  }

  addTOCart(p1: Product) {
    this.addProduct(p1, 1);
    localStorage.setItem('cleardata', JSON.stringify(this.cart));
    this.publish.next(this.cart);
  }

  removeFromCart(p1: CartProduct) {
    this.removeProduct(p1);
    localStorage.setItem('cartdata', JSON.stringify(this.cart));
    this.publish.next(this.cart);
  }
  changeQuantity(CartProduct: CartProduct, quantity) {
    this.changeCartQuantity(CartProduct, quantity);
    localStorage.setItem('cartdata', JSON.stringify(this.cart));
    this.publish.next(this.cart);
  }

  addProduct(product: Product, quantity: number) {
    var cp: CartProduct = new CartProduct(product, quantity);
    this.cart.products.push(cp);
    this.cart.total = this.cart.total + cp.amount;
  }

  removeProduct(rProduct: CartProduct) {
    var index = this.cart.products.findIndex(element => {
      return element.product.id == rProduct.product.id;
    });
    this.cart.products.splice(index, 1);
    this.cart.total = this.cart.total - rProduct.amount;
  }
  changeCartQuantity(CartProduct: CartProduct, quantity) {
    CartProduct.quantity = quantity;
    CartProduct.amount = CartProduct.product.price * quantity;
    this.caltotal();
  }

  caltotal() {
    this.cart.total = 0;
    for (var i = 0; i < this.cart.products.length; i++) {
      this.cart.total = this.cart.total + this.cart.products[i].amount;
    }
  }
}
