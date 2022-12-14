import { useState } from "react";
import useExport from "../../hooks/useExport/useExport";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ButtonStyled, GetAppIconStyled } from "./ExportButton.styled";

const ExportButton = () => {
  const { exportToPdf, exportToHTML } = useExport();
  const [parent, setParent] = useState(null);

  const handleClick = (event) => {
    setParent(event.currentTarget);
  };

  const handleClose = () => {
    setParent(null);
  };

  const handleClickPdf = () => {
    exportToPdf("export-list");
    setParent(null);
  };

  const handleClickHTML = () => {
    exportToHTML("export-list");
    setParent(null);
  };

  return (
    <div className="export-ignore">
      <ButtonStyled
        id="basic-button"
        aria-controls={parent ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={parent ? "true" : undefined}
        onClick={handleClick}
      >
        <GetAppIconStyled />
      </ButtonStyled>
      <Menu
        id="basic-menu"
        anchorEl={parent}
        open={parent || false}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClickPdf} >Export as PDF</MenuItem>
        <MenuItem onClick={handleClickHTML}>Export as HTML</MenuItem>
      </Menu>
  </div>
  );
};

export default ExportButton;