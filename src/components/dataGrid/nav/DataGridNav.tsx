import React from "react";
import { useNavigate } from "react-router";

//styles
import * as Styled from "./DataGridNav.styles";

//icons
import * as Icon from "@icons/icons";

//interfaces
import { IDataGridNavProps } from "./DataGridNav.interfaces";

//components
import Button from "@components/button/Button";

const DataGridNav = ({
  query,
  setQuery,
  data,
  linkPage,
}: IDataGridNavProps) => {
  const navigate = useNavigate();
  return (
    <Styled.DataGridNavWrapper>
      <Styled.SearchWrapper>
        <Icon.FaSearch />
        <input
          placeholder="Szukaj..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </Styled.SearchWrapper>
      <Styled.ButtonsWrapper>
        {/* {data.length > 0 && (
          <Button
            variant="data-secondary"
            onClick={() => setExportPopupDisplay(true)}
          >
            <Icon.FaFileExport />
            Eksportuj
          </Button>
        )} */}
        <Button
          onClick={() => navigate(`${linkPage}/new`)}
          variant="data-primary"
        >
          <Icon.FaPlus />
          Dodaj
        </Button>
      </Styled.ButtonsWrapper>
    </Styled.DataGridNavWrapper>
  );
};

export default DataGridNav;
