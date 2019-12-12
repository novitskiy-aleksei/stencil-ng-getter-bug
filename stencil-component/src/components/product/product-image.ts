import * as env from '../../environment.json';

export class ProductImage {
  id: string;
  name?: string;
  link: string;
  photo: {
    filename: string;
    publicUrl: string;
  };

  get original(): string {
    return this.link || env.IMAGE_HOST + this.photo.publicUrl;
  }

  get thumbnail(): string {
    return this.link || env.IMAGE_HOST + this.photo.publicUrl;
  }

  constructor(props = {}) {
    Object.assign(this, props);
    if (!props.hasOwnProperty('photo')) {
      this.photo = {
        filename: 'default',
        publicUrl: '/static/image/default.png',
      };
    }
  }

}
