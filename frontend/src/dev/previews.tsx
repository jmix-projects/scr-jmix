import CarList from "../app/car/CarList";
import CarEdit from "../app/car/CarEdit";
import React from "react";
import { Previews, ComponentPreview } from "@haulmont/react-ide-toolbox";

export const ComponentPreviews = () => {
  return (
    <Previews>
      <ComponentPreview path="/CarEdit">
        <CarEdit />
      </ComponentPreview>

      <ComponentPreview path="/CarList">
        <CarList />
      </ComponentPreview>
    </Previews>
  );
};
