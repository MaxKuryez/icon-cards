import AddLocationIcon from "@mui/icons-material/AddLocation";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const IconSelector = () => {
  const [parent, setParent] = useState(null);
  const [currentIcon, setCurrentIcon] = useState(AddLocationIcon);
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
        aria-controls={parent ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={parent ? 'true' : undefined}
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
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClose(AddLocationIcon)}><AddLocationIcon /></MenuItem>
        <MenuItem onClick={() => handleClose(AccessAlarmsIcon)}><AccessAlarmsIcon /></MenuItem>
        <MenuItem onClick={() => handleClose(AccessibilityIcon)}><AccessibilityIcon /></MenuItem>
        <MenuItem onClick={() => handleClose(AddCircleIcon)}><AddCircleIcon /></MenuItem>
        <MenuItem onClick={() => handleClose(ThumbUpIcon)}><ThumbUpIcon /></MenuItem>
      </Menu>
    </div>
  );
}

export default IconSelector;
