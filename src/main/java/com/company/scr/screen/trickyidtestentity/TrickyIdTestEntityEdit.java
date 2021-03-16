package com.company.scr.screen.trickyidtestentity;

import io.jmix.ui.screen.*;
import com.company.scr.entity.test.ids.TrickyIdTestEntity;

@UiController("scr_TrickyIdTestEntity.edit")
@UiDescriptor("tricky-id-test-entity-edit.xml")
@EditedEntityContainer("trickyIdTestEntityDc")
public class TrickyIdTestEntityEdit extends StandardEditor<TrickyIdTestEntity> {
}