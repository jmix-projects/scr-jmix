package com.company.scr.screen.garage;

import io.jmix.ui.screen.*;
import com.company.scr.entity.Garage;

@UiController("scr_Garage.browse")
@UiDescriptor("garage-browse.xml")
@LookupComponent("garagesTable")
public class GarageBrowse extends StandardLookup<Garage> {
}