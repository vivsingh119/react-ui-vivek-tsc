import React from "react";
import Button from "./index";

export default {
  title: "Components/Button",
  component: Button,
  tags:["autodocs"]
};

export const Default = () => <Button label="Click ME" />;
export const Disable = () => <Button label="Click ME" disabled />;
export const Playground = (props: any) => {
  return <Button {...props} />;
};

Playground.args = {
  label: "Click PLay",
  variant: "primary",
  disabled: false,
  normalCase: false,
};
Playground.argTypes = {
  onClick: { action: "Click" },
  variant: {
    control: { type: "select" },
    options: [
      "primary",
      "secondary",
      "tertiary",
      "warning",
      "override",
      "flat",
    ],
  },
};
