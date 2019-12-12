import { ReplaySubject } from 'rxjs';
import { Query } from './query';

export abstract class AbstractList<T> {

  listChanged$ = new ReplaySubject<any>(1);
  isBatch = false;
  isBatchFull = null;
  query: Query;

  protected source = [];

  abstract all(): T[];

  clear() {
    this.query.variables.skip = 0;
    this.source = [];
  }

}
