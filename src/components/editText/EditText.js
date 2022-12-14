import { useState, useRef } from "react";
import { TextStyled, InputStyled, EditContainer } from "./editText.styled";

const EditText = ({ big }) => {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handleInput = () => {
    console.log(big);
    const newText = inputRef && inputRef.current && inputRef.current.value;
    newText && setText(newText);
    setActive(false);
  };

  const handleTextClick = () => {
    setActive(true);
  };

  return(
    <EditContainer>
      {active ?
        <InputStyled
          type="text"
          onBlur={handleInput}
          inputRef={inputRef}
          defaultValue={text}
          multiline
          autoFocus
        />
        :
        <TextStyled onClick={handleTextClick} big={big}>
          {text || "Insert Text Here"}
        </TextStyled>
      }
    </EditContainer>
  );
};

export default EditText;