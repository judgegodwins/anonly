import { createContext, FC, useContext, useState } from "react";

export const shareDialogContext = createContext({
  open: false,
  openDialog: () => {},
  closeDialog: () => {},
});

export const useShareDialog = () => useContext(shareDialogContext);

export const useProvideShareDialog = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => setOpen(true);

  const closeDialog = () => setOpen(false);

  return { open, openDialog, closeDialog };
};

export const ShareDialogProvider: FC<{}> = ({ children }) => {
  const share = useProvideShareDialog();

  return (
    <shareDialogContext.Provider value={share}>
      {children}
    </shareDialogContext.Provider>
  );
};
