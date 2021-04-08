import {TrickyIdMgr} from "../app/tricky-id/TrickyIdMgr";
import {BoringStringIdManagementTable} from "../app/boring-string-id-management-table/BoringStringIdManagementTable";
import {WeirdStringIdMgtTableManagement} from "../app/weird-string-id-management-table/WeirdStringIdMgtTableManagement";
import {WeirdStringIdMgtListManagement} from "../app/weird-string-id-management-list/WeirdStringIdMgtListManagement";
import {WeirdStringIdMgtCardsManagement} from "../app/weird-string-id-management-cards/WeirdStringIdMgtCardsManagement";
import {StringIdMgtTableManagement} from "../app/string-id-management-table/StringIdMgtTableManagement";
import {StringIdMgtListManagement} from "../app/string-id-management-list/StringIdMgtListManagement";
import {StringIdMgtCardsManagement} from "../app/string-id-management-cards/StringIdMgtCardsManagement";
import {StringIdCards} from "../app/string-id-cards/StringIdCards";
import {IntIdentityIdMgtListManagement} from "../app/int-identity-id-management-list/IntIdentityIdMgtListManagement";
import {IntIdentityIdMgtCardsManagement} from "../app/int-identity-id-management-cards/IntIdentityIdMgtCardsManagement";
import {IntIdentityIdMgtTableManagement} from "../app/int-identity-id-management-table/IntIdentityIdMgtTableManagement";
import {IntIdManagementList} from "../app/int-id-management-list/IntIdManagementList";
import {IntIdManagementCards} from "../app/int-id-management-cards/IntIdManagementCards";
import {IntIdManagementTable} from "../app/int-id-management-table/IntIdManagementTable";
import {IntIdentityIdCards} from "../app/int-id-cards/IntIdentityIdCards";
import {DatatypesCards} from "../app/datatypes-test-cards/DatatypesCards";
import {Datatypes3Management} from "../app/datatypes3/Datatypes3Management";
import {Datatypes2Management} from "../app/datatypes2/Datatypes2Management";
import {CompositionO2MManagement} from "../app/compositionO2M/CompositionO2MManagement";
import {CompositionO2OManagement} from "../app/compositionO2O/CompositionO2OManagement";
import {AssociationM2MManagement} from "../app/associationM2M/AssociationM2MManagement";
import {AssociationM2OManagement} from "../app/associationM2O/AssociationM2OManagement";
import {AssociationO2MManagement} from "../app/associationO2M/AssociationO2MManagement";
import {AssociationO2OManagement} from "../app/associationO2O/AssociationO2OManagement";
import {HooksPOCManagement} from "../app/hooks-poc/HooksPOCManagement";
import {DatatypesManagement3} from "../app/datatypes-test3/DatatypesManagement3";
import {DatatypesManagement2} from "../app/datatypes-test2/DatatypesManagement2";
import {DatatypesManagement1} from "../app/datatypes-test1/DatatypesManagement1";
import {CarManagement3} from "../app/entity-management3/CarManagement3";
import {CarManagement2} from "../app/entity-management2/CarManagement2";
import {CarManagement} from "../app/entity-management/CarManagement";
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
