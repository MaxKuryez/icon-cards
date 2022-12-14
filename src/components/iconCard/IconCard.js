import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { IconContainer, CardContainer } from "./iconCard.styled";
import IconSelector from "../iconSelector/IconSelector";

const IconCard = () => {
  return(
    <CardContainer>
      <IconContainer>
        <IconSelector />
      </IconContainer>
      <FormControl>
        <Input placeholder="Input here"/>
        <Input placeholder="Input here"/>
      </FormControl>
    </CardContainer>
  );
};

export default IconCard;
