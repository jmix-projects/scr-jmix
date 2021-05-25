package com.company.scr.spqr;

import io.jmix.core.metamodel.annotation.JmixEntity;

@JmixEntity(name = "scr_CarDto_1")
public class CarDto {

    private String manufacturer;

    private String model;

    public CarDto(String manufacturer, String model) {
        this.manufacturer = manufacturer;
        this.model = model;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }
}