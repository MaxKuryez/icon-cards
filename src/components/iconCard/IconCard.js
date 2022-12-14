import IconSelector from "../iconSelector/IconSelector";
import { FormGroup } from '@mui/material';
import EditText from '../editText/EditText';

const IconCard = () => {
  return(
    <div>
      <div>
        <IconSelector />
      </div>
      <FormGroup>
        <EditText />
        <EditText />
      </FormGroup>
    </div>
  );
};

export default IconCard;
