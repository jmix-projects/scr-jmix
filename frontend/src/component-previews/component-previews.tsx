import {FavoriteCars} from "../app/entity-cards/FavoriteCars";
import {TestBlankComponent} from "../app/blank-components/TestBlankComponent";
import React from "react";
import {Previews} from "./previews";
import {ComponentPreview} from "./component-preview";
import CarEdit from "../app/entity-management/CarEdit";
import CarCards from "../app/entity-management/CarCards";
import {ResultComponent} from "../app/example/Result";

export const ComponentPreviews: React.FC = () => {
  return (
    <Previews>

      <ComponentPreview path="/testBlankComponent">
        <TestBlankComponent/>
      </ComponentPreview>

      <ComponentPreview path="/favoriteCars">
        <FavoriteCars/>
      </ComponentPreview>

      <ComponentPreview path="/carEdit">
        <CarEdit entityId={"new"}/>
      </ComponentPreview>

      <ComponentPreview path="/carCards">
        <CarCards onPagingChange={() => {}} paginationConfig={{}}/>
      </ComponentPreview>

      <ComponentPreview path="/result">
        <ResultComponent/>
      </ComponentPreview>
    </Previews>
  );
};
