import { ListDisplayType } from './list-display-type';

export class ListDisplayOption {
  public maxWidth: number;
  public type: ListDisplayType;
  public itemsPerRow: number;
  public maxItems: number;
  public showMoreButton: boolean;

  constructor(props) {
    Object.assign(this, props);
  }
}
