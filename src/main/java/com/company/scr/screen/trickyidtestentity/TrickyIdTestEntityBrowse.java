package com.company.scr.screen.trickyidtestentity;

import io.jmix.ui.screen.*;
import com.company.scr.entity.test.ids.TrickyIdTestEntity;

@UiController("scr_TrickyIdTestEntity.browse")
@UiDescriptor("tricky-id-test-entity-browse.xml")
@LookupComponent("trickyIdTestEntitiesTable")
public class TrickyIdTestEntityBrowse extends StandardLookup<TrickyIdTestEntity> {
}