import React, { ReactNode } from "react";
import Button from "../Button";
import classNames from "classnames";


interface LinkProps {
  className?: string;
  children: ReactNode;
  link?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  target?: string;
}

export default function Link(props: LinkProps) {
  const {
    className,
    disabled = false,
    children,
    link,
    onClick,
    id,
    target = "_blank",
  } = props;

  const renderControl = () => {
    if (link) {
      return (
        <a
          data-testid="link"
          href={link}
          className={classNames("ui-link", className)}
          target={target}
          rel="noopener noreferrer"
          {...(id && { id: id })}
        >
          {children}
        </a>
      );
    }
    return (
      <Button
        className={classNames("ui-link", className)}
        variant="secondary"
        onClick={onClick}
        label={children}
        {...(id && { id: id })}
      />
    );
  };

  return disabled ? (
    <span
      data-testid="link_disable"
      className="ui-link--disabled"
      {...(id && { id: id })}
    >
      {children}
    </span>
  ) : (
    renderControl()
  );
}
