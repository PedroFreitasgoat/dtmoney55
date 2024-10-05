import * as Dialog from "@radix-ui/react-dialog";
import { HeaderContainer, HeaderContent, NewTransectionbutton } from "./styles";
import { NewTransactionModal } from "../NewTransactionmodal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Logo</h1>

        <Dialog.Root>
          <Dialog.Trigger asChield>
            <NewTransectionbutton>Nova transation</NewTransectionbutton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
