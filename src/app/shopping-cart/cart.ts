import { User } from './../users/user';
import { CartProduct } from './cart-product';

export class Cart {
  products: CartProduct[];
  user: User;
  total: number = 0;
  constructor(a: User) {
    this.products = [];
    this.user = a;
  }
}
