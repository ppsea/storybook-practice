/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import MyButton from "./MyButton";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Icon from "../Icon/Icon";

export default {
  title: "components|basic/MyButton",
  component: MyButton,
  decorators: [withKnobs],
};

export const button = () => {
  const label = text("children", "BUTTON");
  const size = select("size", ["small", "medium", "big"], "medium");
  const theme = select("theme", ["default", "active", "hover"], "default");
  const disabled = boolean("disabled", false);
  const width = text("width", "");
  return (
    <MyButton
      size={size}
      theme={theme}
      disabled={disabled}
      width={width}
      onClick={action("onClick")}
    >
      {label}
    </MyButton>
  );
};

button.story = {
  name: "Default",
};

export const inactiveButton = () => {
  return <MyButton>DEFAULT</MyButton>;
};

export const activeButton = () => {
  return <MyButton theme="active">ACTIVE</MyButton>;
};

export const hoverButton = () => {
  return <MyButton theme="hover">HOVER</MyButton>;
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <MyButton size="small">BUTTON</MyButton>
      </div>
      <div>
        <div className="description">Medium</div>
        <MyButton size="medium">BUTTON</MyButton>
      </div>
      <div>
        <div className="description">Big</div>
        <MyButton size="big">BUTTON</MyButton>
      </div>
    </div>
  );
};

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <MyButton disabled>DEFAULT</MyButton>
      </div>
      <div>
        <MyButton disabled theme="active">
          ACTIVE
        </MyButton>
      </div>
      <div>
        <MyButton disabled theme="hover">
          HOVER
        </MyButton>
      </div>
    </div>
  );
};

export const customSized = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <MyButton width="20rem">CUSTOM WIDTH</MyButton>
      </div>
      <div>
        <MyButton width="100%">FULL WIDTH</MyButton>
      </div>
    </div>
  );
};

export const withIcon = () => {
  return (
    <div>
      <ButtonGroup>
        <MyButton size="small">
          <Icon icon="heart" /> LIKE
        </MyButton>
        <MyButton>
          <Icon icon="heart" /> LIKE
        </MyButton>
        <MyButton size="big">
          <Icon icon="heart" /> LIKE
        </MyButton>
      </ButtonGroup>
    </div>
  );
};

export const iconOnly = () => {
  return (
    <div>
      <ButtonGroup>
        <MyButton iconOnly size="small">
          <Icon icon="heart" />
        </MyButton>
        <MyButton iconOnly>
          <Icon icon="heart" />
        </MyButton>
        <MyButton iconOnly size="big">
          <Icon icon="heart" />
        </MyButton>
      </ButtonGroup>
    </div>
  );
};
