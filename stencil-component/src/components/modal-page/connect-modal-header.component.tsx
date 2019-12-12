import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'connect-modal-header',
})
export class ConnectModalHeader {

  @State() state = false;
  @Prop() header: string;

  modalDismiss() {
    const modalController: any = document.querySelector('ion-modal-controller');
    return modalController.dismiss();
  }

  render() {
    return <ion-header class="font-display">
      <ion-toolbar>
        <ion-item lines="none" slot="start" color="secondary">
          <ion-label class="font-display ion-text-left">
            {this.header}
          </ion-label>
        </ion-item>
        <ion-icon slot="end" size="large" icon="close" onClick={() => this.modalDismiss()}/>
      </ion-toolbar>
    </ion-header>
    ;
  }
}
