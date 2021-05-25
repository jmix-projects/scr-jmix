package com.company.scr.spqr;

import com.company.scr.entity.Car;
import com.company.scr.entity.CarType;
import graphql.GraphQLException;
import io.jmix.core.UnsafeDataManager;
import io.leangen.graphql.annotations.GraphQLMutation;
import io.leangen.graphql.annotations.GraphQLQuery;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
@GraphQLApi
public class OrderService {

    @Autowired
    private UnsafeDataManager dataManager;

    @GraphQLQuery(name = "custom_cars")
    public Collection<CarDto> cars() {
        List<CarDto> cars = dataManager.load(Car.class).all().list().stream()
                .map(car -> new CarDto(car.getManufacturer(), car.getModel()))
                .collect(Collectors.toList());

        return cars;
    }

    @GraphQLMutation(name = "custom_createCar")
    public CarDto createCar(CarDto carDto) {
        if ("BMW".equals(carDto.getManufacturer())) {
            throw new GraphQLException("BMW is not allowed");
        }
        Car car = dataManager.create(Car.class);
        car.setManufacturer(carDto.getManufacturer());
        car.setModel(carDto.getModel());
        car.setCarType(CarType.SEDAN);
        Car saved = dataManager.save(car);
        return  new CarDto(saved.getManufacturer(), saved.getModel());
    }

}
