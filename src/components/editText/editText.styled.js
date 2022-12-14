import Input from "@mui/material/Input";
import { styled } from '@mui/system';

export const TextStyled = styled("div")`
  margin: 12px auto 10px auto;
  text-align: center;
  cursor: pointer;
  font-size: ${(props) => props.big ? "20px" : "15px"};
`;

export const InputStyled = styled(Input)({
  margin: "10px auto 0 auto",
  width: "80%",
  maxWidth: 200
});

export const EditContainer = styled("div")({
  textAlign: "center",
});
