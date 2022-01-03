import React, { useRef, useEffect } from "react";

//styles
import * as Styled from "./ExportPopup.styles";

//icons
import * as Icon from "@icons/icons";

//context
import { useDarkMode } from "@context/darkMode";

//csv
import { CSVLink } from "react-csv";

import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const ExportPopup = ({ setExportPopupDisplay, availableColumns, dataRows }) => {
  const { darkMode } = useDarkMode();
  const popupRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!popupRef.current.contains(e.target)) {
        setExportPopupDisplay(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <Styled.PopupContainer>
      <Styled.PopupContentWrapper ref={popupRef} darkMode={darkMode}>
        <Styled.PopupContentHeading>
          <span>
            <Icon.FaFileExport />
          </span>
          <h2>Eksportuj</h2>
        </Styled.PopupContentHeading>
        <Styled.PopupContentItemsWrapper>
          <Styled.PopupContentItem variant="pdf" darkMode={darkMode}>
            <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
              <span>
                <Icon.FaFilePdf />
              </span>
              <h3>Eksportuj plik pdf</h3>
            </PDFDownloadLink>
          </Styled.PopupContentItem>

          <Styled.PopupContentItem variant="csv" darkMode={darkMode}>
            <CSVLink data={dataRows} headers={availableColumns}>
              <span>
                <Icon.FaFileExcel />
              </span>
              <h3>Eksportuj plik csv</h3>
            </CSVLink>
          </Styled.PopupContentItem>
        </Styled.PopupContentItemsWrapper>
      </Styled.PopupContentWrapper>
    </Styled.PopupContainer>
  );
};

export default ExportPopup;
