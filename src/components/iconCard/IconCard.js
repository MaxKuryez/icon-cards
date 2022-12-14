import Input from '@mui/material/Input';
import { IconContainer, CardContainer } from "./iconCard.styled";
import IconSelector from "../iconSelector/IconSelector";
import { FormGroup } from '@mui/material';

const IconCard = () => {
  return(
    <CardContainer>
      <IconContainer>
        <IconSelector />
      </IconContainer>
      <FormGroup>
        <Input id="top" placeholder="Input here"/>
        <Input id="bottom" placeholder="Input here"/>
      </FormGroup>
    </CardContainer>
  );
};

export default IconCard;
