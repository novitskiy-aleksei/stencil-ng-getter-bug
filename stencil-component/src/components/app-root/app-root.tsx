import { Component, h } from '@stencil/core';
import * as localEnv from '../../environment.json';

@Component({
  tag: 'dd-host',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return ([
      <ion-router useHash={false} root={localEnv.BASE_URL}>,
        <ion-route url="/main" component="product-list" />,
      </ion-router>,
      <ion-nav class={'dd-navigation'} />
    ]);
  }

}
