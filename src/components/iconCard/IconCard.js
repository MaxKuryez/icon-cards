import AddLocationIcon from "@mui/icons-material/AddLocation";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { IconContainer, CardContainer } from "./iconCard.styled";

const IconCard = () => {
  return(
    <CardContainer>
      <IconContainer>
        <AddLocationIcon />
      </IconContainer>
      <FormControl>
        <Input placeholder="Input here"/>
        <Input placeholder="Input here"/>
      </FormControl>
    </CardContainer>
  );
};

export default IconCard;