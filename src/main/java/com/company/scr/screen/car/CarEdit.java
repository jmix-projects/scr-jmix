package com.company.scr.screen.car;

import io.jmix.ui.screen.*;
import com.company.scr.entity.Car;

@UiController("scr$Car.edit")
@UiDescriptor("car-edit.xml")
@EditedEntityContainer("carDc")
public class CarEdit extends StandardEditor<Car> {
}