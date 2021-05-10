import React from "react";
import CarEdit from "./CarEdit";
import CarList from "./CarList";
import {
  registerEntityEditorScreen,
  registerEntityBrowserScreen,
  registerRoute
} from "@haulmont/jmix-react-ui";

const ENTITY_NAME = "scr$Car";
const ROUTING_PATH = "/carManagement";

registerRoute(
  `${ROUTING_PATH}/:entityId?`,
  ROUTING_PATH,
  "carManagement list",
  <CarList />,
  ENTITY_NAME,
  "CarManagement"
);
registerEntityEditorScreen(ENTITY_NAME, "carManagement", <CarEdit />);
registerEntityBrowserScreen(ENTITY_NAME, "carManagement", <CarList />);
