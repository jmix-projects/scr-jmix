package com.company.scr.screen.car;

import io.jmix.ui.screen.*;
import com.company.scr.entity.Car;

@UiController("scr_Car.browse")
@UiDescriptor("car-browse.xml")
@LookupComponent("carsTable")
public class CarBrowse extends StandardLookup<Car> {
}