export type DialogAction  = {
    type: 'SET_OPEN_DIALOG' | 'SET_CLOSE_DIALOG';
}

export const ActionOpenDialog = (): DialogAction => ({
    type: 'SET_OPEN_DIALOG',
  });

export const ActionCloseDialog = (): DialogAction => ({
    type: 'SET_CLOSE_DIALOG',
  });

export const openCheckout = () => ({ type: 'OPEN_CHECKOUT' });
export const closeCheckout = () => ({ type: 'CLOSE_CHECKOUT' });