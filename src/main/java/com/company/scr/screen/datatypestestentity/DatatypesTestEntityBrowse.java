package com.company.scr.screen.datatypestestentity;

import io.jmix.ui.screen.*;
import com.company.scr.entity.test.DatatypesTestEntity;

@UiController("scr_DatatypesTestEntity.browse")
@UiDescriptor("datatypes-test-entity-browse.xml")
@LookupComponent("datatypesTestEntitiesTable")
public class DatatypesTestEntityBrowse extends StandardLookup<DatatypesTestEntity> {
}