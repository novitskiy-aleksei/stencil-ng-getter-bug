import { QueryVariables } from './query-variables';

export class Query {

  query: string;
  variables: QueryVariables;

  constructor (query, variables?) {
    this.query = query;
    if (variables) {
      this.variables = variables;
    }
  }
}
