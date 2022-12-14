import { IconContainer, CardContainer } from "./iconCard.styled";
import IconSelector from "../iconSelector/IconSelector";
import { FormGroup } from '@mui/material';
import EditText from '../editText/EditText';

const IconCard = () => {
  return(
    <CardContainer>
      <IconContainer>
        <IconSelector />
      </IconContainer>
      <FormGroup>
        <EditText />
        <EditText />
      </FormGroup>
    </CardContainer>
  );
};

export default IconCard;
