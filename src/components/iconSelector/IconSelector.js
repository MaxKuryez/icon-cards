import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { iconsList } from "../../mockData/iconsList";
import { IconButton } from "./IconSelector.styled";

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
      <IconButton
        id="basic-button"
        aria-controls={parent ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={parent ? "true" : undefined}
        onClick={handleClick}
      >
        <IconComponent fontSize="inherit"/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={parent}
        open={parent || false}
        onClose={() => handleClose(currentIcon)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          {iconsList.map((Icon) => {
            return <MenuItem onClick={() => handleClose(Icon)} style={{padding: "5px 45px 5px 45px"}}><Icon /></MenuItem>
          })}
      </Menu>
    </div>
  );
}

export default IconSelector;
