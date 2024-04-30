type ModalAction  = {
    type: 'SET_OPEN_DIALOG' | 'SET_CLOSE_DIALOG';
}

export const ActionOpenModal = (): ModalAction => ({
    type: 'SET_OPEN_DIALOG',
  });

export const ActionCloseModal = (): ModalAction => ({
    type: 'SET_CLOSE_DIALOG',
  });

export const openCheckout = () => ({ type: 'ABRIR_CHECKOUT' });
export const closeCheckout = () => ({ type: 'FECHAR_CHECKOUT' });