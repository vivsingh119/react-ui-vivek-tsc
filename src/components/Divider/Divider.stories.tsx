import React from "react";
import Divider, { DividerVariants } from "./index";

export default {
  title: "Components/Divider",
  component: Divider,
  tags:["autodocs"]
};

export const Default = () => <Divider />;

export const Canvas = () => <Divider mode={DividerVariants.Canvas} />;
export const Alert = () => <Divider mode={DividerVariants.Alert} />;

export const Playground = (props: any) => {
  return <Divider {...props} />;
};
Playground.args = {
  mode: DividerVariants.Content,
  id: "div1",
};

Playground.argTypes = {
  mode: {
    options: Object.values(DividerVariants),
    control:{type:"select"}
  },
};
