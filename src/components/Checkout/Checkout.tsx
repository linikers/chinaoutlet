import { Dialog,  DialogContent } from "@mui/material"
// import { FormDialog } from "./components/Form"

interface IDialogProps {
    openDialog: boolean,
    handleCloseDialog: () => void,
}
export const DialogCheckout = (props: IDialogProps) => {
    const {openDialog, handleCloseDialog} = props
    console.log("abriu")
     return(
        <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent>
          {/* <FormDialog /> */}
        </DialogContent>
        {/* <DialogActions /> */}
        </Dialog>
    )
}