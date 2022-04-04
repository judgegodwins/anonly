import { FC } from "react";
import { useProvideShareDialog, shareDialogContext } from "contexts/shareContext";

const ShareDialogProvider: FC<{}> = ({ children }) => {
  const share = useProvideShareDialog();

  return (
    <shareDialogContext.Provider value={share}>
      {children}
    </shareDialogContext.Provider>
  );
};

export default ShareDialogProvider;