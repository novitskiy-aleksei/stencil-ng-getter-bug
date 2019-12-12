export function modalDismiss() {
  const modalController: any = document.querySelector('ion-modal-controller');
  return modalController.dismiss();
}

export async function showModal(component, payload) {
  const modalController: any = document.querySelector('ion-modal-controller');
  await modalController.componentOnReady();

  const modalElement = await modalController.create({
    component: 'modal-page',
    componentProps: {component, payload, id: new Date().getTime().toString()},
  });

  return modalElement.present();
}

export function formatMoney(amount, n?: number, x?: number) {
  const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return amount.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}
