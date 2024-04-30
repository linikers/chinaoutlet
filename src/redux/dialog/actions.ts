interface ActionModal {
    type: 'SET_OPEN_DIALOG' | 'SET_CLOSE_DIALOG';
}

export const ActionOpenModal = (): ActionModal => ({
    type: 'SET_OPEN_DIALOG',
  });

  export const ActionCloseModal = (): ActionModal => ({
    type: 'SET_CLOSE_DIALOG',
  });

export const openCheckout = () => ({ type: 'ABRIR_CHECKOUT' });
export const closeCheckout = () => ({ type: 'FECHAR_CHECKOUT' });