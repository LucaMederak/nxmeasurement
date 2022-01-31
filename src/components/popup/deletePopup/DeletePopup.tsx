import React from "react";
import PopupContainer from "../PopupContainer";
import Button from "@components/button/Button";

//styles
import * as Styled from "./DeletePopup.styles";

//icons
import * as Icon from "@icons/icons";

//interfaces
import { IDeletePopupProps } from "./DeletePopup.interfaces";

const DeletePopup = ({
  action,
  itemName,
  openPopup,
  setOpenPopup,
}: IDeletePopupProps) => {
  return (
    <PopupContainer openPopup={openPopup} setOpenPopup={setOpenPopup}>
      <Styled.PopupContentHeading>
        <span>
          <Icon.FaTrash />
        </span>
        <h2>Usuń</h2>
      </Styled.PopupContentHeading>
      <Styled.PopupContentItemsWrapper>
        <h3>Czy napewno chcesz usunąć {itemName} ?</h3>
        <Button width="40rem" variant="data-delete-primary" onClick={action}>
          usuń
        </Button>
      </Styled.PopupContentItemsWrapper>
    </PopupContainer>
  );
};

export default DeletePopup;
