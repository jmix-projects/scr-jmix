package com.company.scr.entity.test;

import io.jmix.core.metamodel.annotation.JmixEntity;

import javax.persistence.Embeddable;

@Embeddable
@JmixEntity(name = "scr_EmbeddableTestEntity")
public class EmbeddableTestEntity {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
