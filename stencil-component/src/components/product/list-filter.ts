import { ListFilterItem } from './list-filter-item';

export class ListFilter {
  items: ListFilterItem[];

  constructor(items: ListFilterItem[] = []) {
    this.items = items;
  }

  getWhere() {
    return Object.assign({}, ...this.items.map(item => item.getValue()))
  }
}
