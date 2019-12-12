import { Component, Prop, State } from '@stencil/core';
import { AbstractList } from '../../abstract-list';
import { Product } from '../../product';

@Component({
  tag: 'product-list',
  styleUrl: 'product-list.component.scss'
})
export class ProductListComponent {

  @Prop() label?: string;
  @Prop() list: AbstractList<Product>;

  @State() items: Product[] = [];

  componentDidLoad() {
    this.list.listChanged$.subscribe(() => this.items = this.list.all());
  }

}
