export class QueryVariables {

  public where;
  public search;
  public skip;
  public first;

  constructor (props?) {
    if (props && typeof props === 'object') {
      if (props.hasOwnProperty('where')) {
        this.where = props.where;
      }
      if (props.hasOwnProperty('search')) {
        this.search = props.search;
      }
      if (props.hasOwnProperty('skip')) {
        this.skip = props.skip;
      }
      // if (props.hasOwnProperty('first')) {
        this.first = props.first || 40;
      // }
    }
  }
}
