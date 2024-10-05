import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton,  Content, Overlay, TransactionType, TrsansactionTypebutton } from "./style";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionModal() {
    return(
        <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>Nova transação</Dialog.Title>

              <CloseButton>
                <X size={24}/>
              </CloseButton>

            <form action=""> 
                <input type="text" placeholder="Descrição" required/>
                <input type="number" placeholder="Preço" required/>
                <input type="text" placeholder="Categoria" required/>

                <TransactionType>
                    <TrsansactionTypebutton variant="income">
                      <ArrowCircleUp size={24}/>
                      Entrada
                    </TrsansactionTypebutton>

                    <TrsansactionTypebutton variant="outcome">
                      <ArrowCircleDown size={24}/>
                      Saída
                    </TrsansactionTypebutton>
                </TransactionType>

                <button type="submit">Cadastrar</button>
            </form>


          <Dialog.Close />
        </Content>
      </Dialog.Portal>
    )
}