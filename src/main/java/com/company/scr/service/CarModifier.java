package com.company.scr.service;

import com.company.scr.entity.Car;
import io.jmix.core.Id;
import io.jmix.core.LoadContext;
import io.jmix.core.Metadata;
import io.jmix.graphql.annotation.GraphQLModifier;
import io.jmix.graphql.loader.GraphQLEntityRemover;
import io.jmix.graphql.loader.GraphQLEntityUpdater;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@GraphQLModifier
public class CarModifier implements GraphQLEntityUpdater<Car>, GraphQLEntityRemover<Car> {

    @Autowired
    Metadata metadata;

    private static Logger log = LoggerFactory.getLogger(CarModifier.class);

    @Override
    public void deleteEntity(Id<Car> entityId) {
        log.info("Delete entity with id :" + entityId.toString());
    }

    @Override
    public Car upsertEntity(LoadContext<Car> context) {
        log.info("upsert entity with id :" + context.getId());
        return null;
    }
}
