/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import classNames from "classnames";
const ButtonVarients: { [key: string]: string } = {
  primary: "ui-button--primary",
  secondary: "ui-button--secondary",
  tertiary: "ui-button--tertiary",
  warning: "ui-button--warning",
  override: "ui-button--override",
  flat: "ui-button--flat",
};
export interface ButtonProps {
  variant?: string;
  label?: string | ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  normalCase?: boolean;
  icon?: ReactNode;
  [attribute: string]: any;
}

export interface ButtonGroupProps {
  children: ReactNode;
  [attribute: string]: any;
}

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    label,
    onClick,
    disabled,
    normalCase,
    icon,
    className,
    elementRef,
    type = "button",
    ...otherProps
  } = props;

  const btnVarient = ButtonVarients[variant] || ButtonVarients["primary"];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "ui-button",
        btnVarient,
        className,
        normalCase && "ui-button--normal-case",
        !label && icon && "ui-button--icon-only"
      )}
      ref={elementRef}
      {...otherProps}
    >
      {label}
      {icon && (
        <span
          className={`ui-button__icon ${
            icon && label ? `ui-button__icon__with-label` : ``
          }`}
        >
          {icon}
        </span>
      )}
    </button>
  );
}
