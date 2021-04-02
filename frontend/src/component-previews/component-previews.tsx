import { TrickyIdMgr } from "../app/tricky-id/TrickyIdMgr";
import { BoringStringIdManagementTable } from "../app/boring-string-id-management-table/BoringStringIdManagementTable";
import { WeirdStringIdMgtTableManagement } from "../app/weird-string-id-management-table/WeirdStringIdMgtTableManagement";
import { WeirdStringIdMgtListManagement } from "../app/weird-string-id-management-list/WeirdStringIdMgtListManagement";
import { WeirdStringIdMgtCardsManagement } from "../app/weird-string-id-management-cards/WeirdStringIdMgtCardsManagement";
import { StringIdMgtTableManagement } from "../app/string-id-management-table/StringIdMgtTableManagement";
import { StringIdMgtListManagement } from "../app/string-id-management-list/StringIdMgtListManagement";
import { StringIdMgtCardsManagement } from "../app/string-id-management-cards/StringIdMgtCardsManagement";
import { StringIdCards } from "../app/string-id-cards/StringIdCards";
import { IntIdentityIdMgtListManagement } from "../app/int-identity-id-management-list/IntIdentityIdMgtListManagement";
import { IntIdentityIdMgtCardsManagement } from "../app/int-identity-id-management-cards/IntIdentityIdMgtCardsManagement";
import { IntIdentityIdMgtTableManagement } from "../app/int-identity-id-management-table/IntIdentityIdMgtTableManagement";
import { IntIdManagementList } from "../app/int-id-management-list/IntIdManagementList";
import { IntIdManagementCards } from "../app/int-id-management-cards/IntIdManagementCards";
import { IntIdManagementTable } from "../app/int-id-management-table/IntIdManagementTable";
import { IntIdentityIdCards } from "../app/int-id-cards/IntIdentityIdCards";
import { DatatypesCards } from "../app/datatypes-test-cards/DatatypesCards";
import { Datatypes3Management } from "../app/datatypes3/Datatypes3Management";
import { Datatypes2Management } from "../app/datatypes2/Datatypes2Management";
import { CompositionO2MManagement } from "../app/compositionO2M/CompositionO2MManagement";
import { CompositionO2OManagement } from "../app/compositionO2O/CompositionO2OManagement";
import { AssociationM2MManagement } from "../app/associationM2M/AssociationM2MManagement";
import { AssociationM2OManagement } from "../app/associationM2O/AssociationM2OManagement";
import { AssociationO2MManagement } from "../app/associationO2M/AssociationO2MManagement";
import { AssociationO2OManagement } from "../app/associationO2O/AssociationO2OManagement";
import { HooksPOCManagement } from "../app/hooks-poc/HooksPOCManagement";
import { DatatypesManagement3 } from "../app/datatypes-test3/DatatypesManagement3";
import { DatatypesManagement2 } from "../app/datatypes-test2/DatatypesManagement2";
import { DatatypesManagement1 } from "../app/datatypes-test1/DatatypesManagement1";
import { CarManagement3 } from "../app/entity-management3/CarManagement3";
import { CarManagement2 } from "../app/entity-management2/CarManagement2";
import { CarManagement } from "../app/entity-management/CarManagement";
import { FavoriteCars } from "../app/entity-cards/FavoriteCars";
import { TestBlankComponent } from "../app/blank-components/TestBlankComponent";
import React from "react";
import { Previews } from "./previews";
import { ComponentsList } from "./components-list";
import { ComponentPreview } from "./component-preview";

export const ComponentPreviews: React.FC = () => {
  return (
    <Previews>
      <ComponentsList />

      <ComponentPreview path="/testBlankComponent">
        <TestBlankComponent />
      </ComponentPreview>

      <ComponentPreview path="/favoriteCars">
        <FavoriteCars />
      </ComponentPreview>

      <ComponentPreview path="/carManagement">
        <CarManagement />
      </ComponentPreview>

      <ComponentPreview path="/carManagement2">
        <CarManagement2 />
      </ComponentPreview>

      <ComponentPreview path="/carManagement3">
        <CarManagement3 />
      </ComponentPreview>

      <ComponentPreview path="/datatypesManagement1">
        <DatatypesManagement1 />
      </ComponentPreview>

      <ComponentPreview path="/datatypesManagement2">
        <DatatypesManagement2 />
      </ComponentPreview>

      <ComponentPreview path="/datatypesManagement3">
        <DatatypesManagement3 />
      </ComponentPreview>

      <ComponentPreview path="/hooksPOCManagement">
        <HooksPOCManagement />
      </ComponentPreview>

      <ComponentPreview path="/associationO2OManagement">
        <AssociationO2OManagement />
      </ComponentPreview>

      <ComponentPreview path="/associationO2MManagement">
        <AssociationO2MManagement />
      </ComponentPreview>

      <ComponentPreview path="/associationM2OManagement">
        <AssociationM2OManagement />
      </ComponentPreview>

      <ComponentPreview path="/associationM2MManagement">
        <AssociationM2MManagement />
      </ComponentPreview>

      <ComponentPreview path="/compositionO2OManagement">
        <CompositionO2OManagement />
      </ComponentPreview>

      <ComponentPreview path="/compositionO2MManagement">
        <CompositionO2MManagement />
      </ComponentPreview>

      <ComponentPreview path="/datatypes2Management">
        <Datatypes2Management />
      </ComponentPreview>

      <ComponentPreview path="/datatypes3Management">
        <Datatypes3Management />
      </ComponentPreview>

      <ComponentPreview path="/datatypesCards">
        <DatatypesCards />
      </ComponentPreview>

      <ComponentPreview path="/intIdentityIdCards">
        <IntIdentityIdCards />
      </ComponentPreview>

      <ComponentPreview path="/intIdManagementTable">
        <IntIdManagementTable />
      </ComponentPreview>

      <ComponentPreview path="/intIdManagementCards">
        <IntIdManagementCards />
      </ComponentPreview>

      <ComponentPreview path="/intIdManagementList">
        <IntIdManagementList />
      </ComponentPreview>

      <ComponentPreview path="/intIdentityIdMgtTableManagement">
        <IntIdentityIdMgtTableManagement />
      </ComponentPreview>

      <ComponentPreview path="/intIdentityIdMgtCardsManagement">
        <IntIdentityIdMgtCardsManagement />
      </ComponentPreview>

      <ComponentPreview path="/intIdentityIdMgtListManagement">
        <IntIdentityIdMgtListManagement />
      </ComponentPreview>

      <ComponentPreview path="/stringIdCards">
        <StringIdCards />
      </ComponentPreview>

      <ComponentPreview path="/stringIdMgtCardsManagement">
        <StringIdMgtCardsManagement />
      </ComponentPreview>

      <ComponentPreview path="/stringIdMgtListManagement">
        <StringIdMgtListManagement />
      </ComponentPreview>

      <ComponentPreview path="/stringIdMgtTableManagement">
        <StringIdMgtTableManagement />
      </ComponentPreview>

      <ComponentPreview path="/weirdStringIdMgtCardsManagement">
        <WeirdStringIdMgtCardsManagement />
      </ComponentPreview>

      <ComponentPreview path="/weirdStringIdMgtListManagement">
        <WeirdStringIdMgtListManagement />
      </ComponentPreview>

      <ComponentPreview path="/weirdStringIdMgtTableManagement">
        <WeirdStringIdMgtTableManagement />
      </ComponentPreview>

      <ComponentPreview path="/boringStringIdManagementTable">
        <BoringStringIdManagementTable />
      </ComponentPreview>

      <ComponentPreview path="/trickyIdMgr">
        <TrickyIdMgr />
      </ComponentPreview>
    </Previews>
  );
};
