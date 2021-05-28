package com.company.scr.graphql.dto;

import io.jmix.core.entity.annotation.JmixGeneratedValue;
import io.jmix.core.entity.annotation.JmixId;
import io.jmix.core.metamodel.annotation.JmixEntity;
import io.leangen.graphql.annotations.types.GraphQLType;

import java.util.UUID;

@GraphQLType(name = "scr_Order_1")
@JmixEntity(name = "scr_Order_1")
public class Order {
    @JmixGeneratedValue
    @JmixId
    private UUID id;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }
}