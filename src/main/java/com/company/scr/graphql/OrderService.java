package com.company.scr.graphql;


import com.company.scr.entity.Car;
import com.company.scr.entity.CarDto;
import com.company.scr.entity.CarType;
import com.company.scr.entity.Garage;
import com.company.scr.entity.sales.Order;
import com.company.scr.entity.sales.Product;
import graphql.GraphQLException;
import io.jmix.core.DataManager;
import io.jmix.core.LoadContext;
import io.jmix.core.Sort;
import io.jmix.core.querycondition.PropertyCondition;
import io.leangen.graphql.annotations.*;
import io.leangen.graphql.spqr.spring.annotations.GraphQLApi;
import io.leangen.graphql.spqr.spring.util.ConcurrentMultiMap;
import org.reactivestreams.Publisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.FluxSink;

import javax.annotation.Nonnull;
import java.math.BigDecimal;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@GraphQLApi
public class OrderService {

    @Autowired
    private DataManager dataManager;

    private final ConcurrentMultiMap<String, FluxSink<Car>> subscribers = new ConcurrentMultiMap<>();

    @GraphQLQuery
    public Collection<CarDto> cars() {
        return dataManager.load(Car.class).all().list().stream()
                .map(CarDto::new)
                .collect(Collectors.toList());
    }

    @GraphQLQuery
    public List<Order> orders(@GraphQLArgument(name = "order", defaultValue = "lastModifiedDate") String order) {
        return dataManager.load(Order.class)
                .query("select e from scr_Order e")
                .sort(Sort.by(order))
                .list();
    }

    @GraphQLQuery
    public List<com.company.scr.graphql.dto.Order> orders2() {
        return Collections.singletonList(new com.company.scr.graphql.dto.Order());
    }

    @GraphQLMutation
    public Product createProduct(@Nonnull String manufacturer, String model, BigDecimal price) {
        if ("BMW".equals(manufacturer)) {
            throw new GraphQLException("BMW is not allowed");
        }
        Car car = dataManager.create(Car.class);
        car.setManufacturer(manufacturer);
        car.setModel(model);
        car.setCarType(CarType.SEDAN);

        Product product = dataManager.create(Product.class);
        product.setCar(car);
        product.setPrice(price);

        subscribers.get(manufacturer).forEach(subscriber -> subscriber.next(car));
        return dataManager.save(product, car).stream()
                .filter(o -> o instanceof Product).map(o -> (Product) o)
                .findFirst().orElse(null);
    }

    @GraphQLQuery
    public Garage garage(@GraphQLContext CarDto carDto) {
        if (carDto.getId() == null) {
            return null;
        }
        Car car = dataManager.load(Car.class).id(carDto.getId()).one();
        return car.getGarage();
    }

    @GraphQLSubscription
    public Publisher<Car> newCarAdded(String manufacturer) {
        return Flux.create(subscriber -> subscribers.add(manufacturer, subscriber.onDispose(() -> subscribers.remove(manufacturer, subscriber))), FluxSink.OverflowStrategy.LATEST);
    }

}
