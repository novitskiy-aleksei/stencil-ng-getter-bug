import { AbstractList } from './abstract-list';
import { Product } from './product';
import { Query } from './query';
import { QueryVariables } from './query-variables';

export class ProductList extends AbstractList<Product>{

  query = new Query(`query GetProducts($where: ProductWhereInput, $search: String, $skip: Int, $first: Int) {
      allProducts(where: $where, search: $search, skip: $skip, first: $first) {
        id
        name
        images {
          id
          name
          link
          photo {
            filename
            publicUrl
          }
        }
        originId
        vin
        miles
        price
        carfax_1_owner
        carfax_clean_title
        exterior_color
        interior_color
        msrp
        inventory_type
        stock_no
        ref_price
        ref_miles
        year
        make
        model
        trim
        body_type
        body_subtype
        vehicle_type
        transmission
        drivetrain
        fuel_type
        engine
        engine_size
        engine_block
        doors
        cylinders
        ownerOrigin
      }
    }`, new QueryVariables({first: 20}));

  all() {
    return this.source.map(item => new Product(item));
  }

}
