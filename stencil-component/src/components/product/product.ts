import { ProductImage } from './product-image';

export class Product {
  id: string;
  url: string;
  inventory_type: 'used' | 'new';
  name: string;
  mileage: string;
  price: number;
  notes: string;
  dealer: any;
  images: ProductImage[];
  favourite?: boolean;
  specialOffer?: {
    newPrice: string;
  };
  originId: string;
  vin: string;
  miles: number;
  carfax_1_owner: boolean;
  carfax_clean_title: boolean;
  exterior_color: string;
  interior_color: string;
  msrp: number;
  stock_no: string;
  ref_price: number;
  ref_miles: number;
  // appearInLists: {type: Relationship, ref: 'ProductList', many: true},
  year: number;
  make: string;
  model: string;
  trim: string;
  body_type: string;
  body_subtype: string;
  vehicle_type: string;
  transmission: string;
  drivetrain: string;
  fuel_type: string;
  engine: string;
  engine_size: number;
  engine_block: string;
  doors: number;
  cylinders: number;
  readonly ownerOrigin: string;

  get features(): {name: string, value: string}[] {
    return [].filter(s => !!s.value);
  }

  constructor(props: any = {}) {
    Object.assign(this, props);
    this.images = props.images.map(img => new ProductImage(img)) || [];
  }

  getMainImage() {
    return this.images.length ? this.images[0] : new ProductImage();
  }

  getMainImageURL() {
    return this.getMainImage().original;
  }

}

