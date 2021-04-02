import React from "react";
import { ComponentPreview } from "./component-preview";

export const ComponentsList: React.FC = () => {
  return (
    <ComponentPreview path={"/"} exact={true}>
      <div>/testBlankComponent</div>

      <div>/favoriteCars</div>

      <div>/carManagement</div>

      <div>/carManagement2</div>

      <div>/carManagement3</div>

      <div>/datatypesManagement1</div>

      <div>/datatypesManagement2</div>

      <div>/datatypesManagement3</div>

      <div>/hooksPOCManagement</div>

      <div>/associationO2OManagement</div>

      <div>/associationO2MManagement</div>

      <div>/associationM2OManagement</div>

      <div>/associationM2MManagement</div>

      <div>/compositionO2OManagement</div>

      <div>/compositionO2MManagement</div>

      <div>/datatypes2Management</div>

      <div>/datatypes3Management</div>

      <div>/datatypesCards</div>

      <div>/intIdentityIdCards</div>

      <div>/intIdManagementTable</div>

      <div>/intIdManagementCards</div>

      <div>/intIdManagementList</div>

      <div>/intIdentityIdMgtTableManagement</div>

      <div>/intIdentityIdMgtCardsManagement</div>

      <div>/intIdentityIdMgtListManagement</div>

      <div>/stringIdCards</div>

      <div>/stringIdMgtCardsManagement</div>

      <div>/stringIdMgtListManagement</div>

      <div>/stringIdMgtTableManagement</div>

      <div>/weirdStringIdMgtCardsManagement</div>

      <div>/weirdStringIdMgtListManagement</div>

      <div>/weirdStringIdMgtTableManagement</div>

      <div>/boringStringIdManagementTable</div>

      <div>/trickyIdMgr</div>
    </ComponentPreview>
  );
};
