package com.company.scr.screen.datatypestestentity;

import io.jmix.ui.screen.*;
import com.company.scr.entity.test.DatatypesTestEntity;

@UiController("scr_DatatypesTestEntity.edit")
@UiDescriptor("datatypes-test-entity-edit.xml")
@EditedEntityContainer("datatypesTestEntityDc")
public class DatatypesTestEntityEdit extends StandardEditor<DatatypesTestEntity> {
}