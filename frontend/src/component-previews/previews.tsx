import React from "react";
import { Switch } from "react-router-dom";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const Previews: React.FC<Props> = ({ children }: Props) => {
  return <Switch>{children}</Switch>;
};
