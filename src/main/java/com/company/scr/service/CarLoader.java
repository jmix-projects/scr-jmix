package com.company.scr.service;

import com.company.scr.entity.Car;
import io.jmix.core.LoadContext;
import io.jmix.core.Metadata;
import io.jmix.graphql.annotation.GraphQLLoader;
import io.jmix.graphql.loader.GraphQLEntityCountLoader;
import io.jmix.graphql.loader.GraphQLEntityListLoader;
import io.jmix.graphql.loader.GraphQLEntityLoader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
@GraphQLLoader
public class CarLoader implements GraphQLEntityCountLoader<Car>,
        GraphQLEntityListLoader<Car>, GraphQLEntityLoader<Car> {

    @Autowired
    Metadata metadata;

    @Override
    public Long loadCount(LoadContext context) {
        return 999L;
    }

    @Override
    public List<Car> loadEntityList(LoadContext<Car> context) {
        Car car1 = metadata.create(Car.class);
        car1.setManufacturer("BMW - TEST");
        Car car2 = metadata.create(Car.class);
        car2.setManufacturer("LADA - TEST");
        return new ArrayList<>(Arrays.asList(car1, car2));
    }

    @Override
    public Car loadEntity(LoadContext<Car> context) {
        Car car = metadata.create(Car.class);
        car.setManufacturer("BMW - TEST");
        return car;
    }
}
