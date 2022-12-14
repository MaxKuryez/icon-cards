import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { iconsList } from "./IconsList";

const IconSelector = () => {
  const [parent, setParent] = useState(null);
  const [currentIcon, setCurrentIcon] = useState(iconsList[0]);
  const IconComponent = currentIcon;

  const handleClick = (event) => {
    setParent(event.currentTarget);
  };

  const handleClose = (icon) => {
    setParent(null);
    setCurrentIcon(icon);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={parent ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={parent ? "true" : undefined}
        onClick={handleClick}
      >
        <IconComponent />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={parent}
        open={parent || false}
        onClose={() => handleClose(currentIcon)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {iconsList.map((Icon) => {
          return <MenuItem onClick={() => handleClose(Icon)}><Icon /></MenuItem>
        })}
      </Menu>
    </div>
  );
}

export default IconSelector;
