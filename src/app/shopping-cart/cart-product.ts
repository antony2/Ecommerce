import { Product } from './../products/product';
export class CartProduct {
  product: Product;
  quantity: number;
  amount: number;
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
    this.amount = this.product.price * this.quantity;
  }
}
