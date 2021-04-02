import React from "react";
import { Route } from "react-router-dom";

interface Props {
  path?: string;
  exact?: boolean;
  children?: JSX.Element | JSX.Element[];
}

export const ComponentPreview: React.FC<Props> = ({
  path,
  children,
  exact = false
}: Props) => {
  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
};
