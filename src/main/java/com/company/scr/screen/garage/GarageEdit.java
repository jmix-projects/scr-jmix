package com.company.scr.screen.garage;

import io.jmix.ui.screen.*;
import com.company.scr.entity.Garage;

@UiController("scr_Garage.edit")
@UiDescriptor("garage-edit.xml")
@EditedEntityContainer("garageDc")
public class GarageEdit extends StandardEditor<Garage> {
}