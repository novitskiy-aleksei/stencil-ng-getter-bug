import { Component, h, Prop, Element, State, Host } from '@stencil/core';

@Component({
  tag: 'modal-page',
  styleUrl: 'modal-page.component.scss',
})
export class ModalPageComponent {

  @Prop() component: string;
  @Prop() payload: any;

  @State() childComponent: any;

  @Element() el: HTMLElement;

  async componentDidLoad() {
    this.childComponent = new (customElements.get(this.component))();
    Object.assign(this.childComponent, this.payload);
    this.el.querySelector('ion-content').appendChild(this.childComponent);
    await this.childComponent.componentOnReady();
    this.childComponent.forceUpdate();
  }

  render() {
    return <Host class="modal-content ion-justify-content-start">
      <connect-modal-header header={this.payload && this.payload.header ? this.payload.header : null}/>
      <ion-content scrollY={true}>
      </ion-content>
    </Host>;
  }

}
