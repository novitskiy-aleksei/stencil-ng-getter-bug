export function modalDismiss() {
    const modalController = document.querySelector('ion-modal-controller');
    return modalController.dismiss();
}
export async function showModal(component, payload) {
    const modalController = document.querySelector('ion-modal-controller');
    await modalController.componentOnReady();
    const modalElement = await modalController.create({
        component: 'modal-page',
        componentProps: { component, payload, id: new Date().getTime().toString() },
    });
    return modalElement.present();
}
