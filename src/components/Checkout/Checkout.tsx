import { Dialog,  DialogContent } from "@mui/material"
import { FormDialog } from "./components/Form"

interface IDialogProps {
    open: boolean,
    handleCloseDialog: () => void,
}
export const DialogCheckout = (props: IDialogProps) => {
    const { open, handleCloseDialog} = props
    console.log("abriu")
     return(
        <Dialog  onClose={handleCloseDialog} open={open}>
        <DialogContent>
          <FormDialog />
        </DialogContent>
        {/* <DialogActions /> */}
        </Dialog>
    )
}