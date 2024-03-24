import styled from "styled-components";
import { TextProps } from "./Text.type";

const StyledText = styled.div<TextProps>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

const Text = ({ text, fontSize, fontWeight, color }: TextProps) => {
  return (
    <StyledText
      text={text}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {text}
    </StyledText>
  );
};

export default Text;
