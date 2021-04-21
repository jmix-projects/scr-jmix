package com.company.scr.graphql;


import com.company.scr.entity.Car;
import com.company.scr.entity.CarType;
import com.company.scr.graphql.dto.CarDto;
import graphql.GraphQLException;
import io.jmix.core.DataManager;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@GraphQLApi
public class OrderService {

    @Autowired
    private DataManager dataManager;

    @GraphQLQuery
    public Collection<Car> cars() {
        return dataManager.load(Car.class).all().list();
    }

    @GraphQLMutation
    public Car createCar(CarDto carDto) {
        if ("BMW".equals(carDto.getManufacturer())) {
            throw new GraphQLException("BMW is not allowed");
        }
        Car car = dataManager.create(Car.class);
        car.setManufacturer(carDto.getManufacturer());
        car.setModel(carDto.getModel());
        car.setCarType(CarType.SEDAN);
        return dataManager.save(car);
    }

}
