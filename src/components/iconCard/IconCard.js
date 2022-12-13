import AddLocationIcon from "@mui/icons-material/AddLocation";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { IconContainer } from "./iconCard.styled";

const IconCard = () => {
  return(
    <div>
      <IconContainer>
        <AddLocationIcon />
      </IconContainer>
      <FormControl>
        <Input placeholder="Input here"/>
        <Input placeholder="Input here"/>
      </FormControl>
    </div>
  );
};

export default IconCard;