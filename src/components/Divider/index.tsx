import React from "react";
import classNames from "classnames";

export interface DividerProps {
  mode?: DividerVariants;
  id?: string;
}
export enum DividerVariants {
  Content = "content",
  Canvas = "canvas",
  Alert = "alert",
}

const modeToClassName: { [key: string]: string } = {
  content: "ui-divider__content",
  canvas: "ui-divider__canvas",
  alert: "ui-divider__alert",
};

export default function Divider(props: DividerProps) {
  const { mode = DividerVariants.Content, id } = props;
  return (
    <hr
      className={classNames("ui-divider", modeToClassName[mode])}
      data-testid="divider"
      {...(id && { id: id })}
    />
  );
}
