import React from "react";
import Link from "./index";

export default {
  title: "Components/Link",
  component: Link,
};
export const Default = () => <Link link="https://www.google.com">Test</Link>;
export const LinkAsButton = () => (
  <Link onClick={() => alert("Clicked!")}>Link As Button</Link>
);

export const Disabled = () => (
  <Link link="https://www.google.com" disabled>
    Disabled Link
  </Link>
);
export const Playground = (props: any) => {
  return <Link {...props}>{props.children}</Link>;
};

Playground.args = {
  children: "Test me",
  disabled: false,
  link: "https://www.google.com",
};
Playground.argTypes = {
  onClick: { action: "clicked" },
};
