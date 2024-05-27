import { Dialog,  DialogContent } from "@mui/material"
import { FormDialog } from "./components/Form"
import React from "react"

interface IDialogProps {
    open: boolean,
    handleCloseDialog: () => void,
    total: number,
}
export const DialogCheckout: React.FC<IDialogProps> = ( {open, handleCloseDialog, total} ) => {
    

     return(
        <Dialog  onClose={handleCloseDialog} open={open}>
        <DialogContent>
          <FormDialog total={total} />
        </DialogContent>
        </Dialog>
    )
}