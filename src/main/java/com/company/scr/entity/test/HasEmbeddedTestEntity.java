package com.company.scr.entity.test;

import io.jmix.core.entity.annotation.JmixGeneratedValue;
import io.jmix.core.metamodel.annotation.JmixEntity;

import javax.persistence.*;
import java.util.UUID;

@JmixEntity
@Table(name = "SCR_HAS_EMBEDDED_TEST_ENTITY")
@Entity(name = "scr_HasEmbeddedTestEntity")
public class HasEmbeddedTestEntity {
    @JmixGeneratedValue
    @Column(name = "ID", nullable = false)
    @Id
    private UUID id;

    @Embedded
    private EmbeddableTestEntity embeddableTestEntity;

    @Column(name = "STRING_ATTR")
    protected String stringAttr;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public EmbeddableTestEntity getEmbeddableTestEntity() {
        return embeddableTestEntity;
    }

    public void setEmbeddableTestEntity(EmbeddableTestEntity embeddableTestEntity) {
        this.embeddableTestEntity = embeddableTestEntity;
    }

    public String getStringAttr() {
        return stringAttr;
    }

    public void setStringAttr(String stringAttr) {
        this.stringAttr = stringAttr;
    }
}