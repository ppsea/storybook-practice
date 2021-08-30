import React from "react";
import ButtonGroup from "./ButtonGroup";
import MyButton from "../MyButton/MyButton";
import { withKnobs, text, radios, boolean } from "@storybook/addon-knobs";

export default {
  title: "components|Basic/ButtonGroup",
  component: ButtonGroup,
  decorators: [withKnobs],
};

export const buttonGroup = () => {
  const direction = radios(
    "direction",
    { Row: "row", Column: "column" },
    "row"
  );
  const rightAlign = boolean("rightAlign", false);
  const gap = text("gap", "0.5rem");

  return (
    <ButtonGroup direction={direction} rightAlign={rightAlign} gap={gap}>
      <MyButton>취소</MyButton>
      <MyButton theme="active">확인</MyButton>
    </ButtonGroup>
  );
};

buttonGroup.story = {
  name: "Default",
};

export const rightAlign = () => {
  return (
    <ButtonGroup rightAlign>
      <MyButton>취소</MyButton>
      <MyButton theme="active">확인</MyButton>
    </ButtonGroup>
  );
};

export const column = () => {
  return (
    <ButtonGroup direction="column">
      <MyButton>CLICK ME</MyButton>
      <MyButton>CLICK ME</MyButton>
    </ButtonGroup>
  );
};

export const customGap = () => {
  return (
    <ButtonGroup gap="1rem">
      <MyButton>취소</MyButton>
      <MyButton theme="active">확인</MyButton>
    </ButtonGroup>
  );
};

export const customGapColumn = () => {
  return (
    <ButtonGroup direction="column" gap="1rem">
      <MyButton>CLICK ME</MyButton>
      <MyButton>CLICK ME</MyButton>
    </ButtonGroup>
  );
};
