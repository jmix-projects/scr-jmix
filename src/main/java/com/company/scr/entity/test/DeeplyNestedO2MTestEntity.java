package com.company.scr.entity.test;

import io.jmix.core.entity.annotation.JmixGeneratedValue;
import io.jmix.core.metamodel.annotation.DependsOnProperties;
import io.jmix.core.metamodel.annotation.InstanceName;
import io.jmix.core.metamodel.annotation.JmixEntity;

import javax.persistence.*;
import java.util.UUID;

@JmixEntity
@Table(name = "SCR_DEEPLY_NESTED_O2M_TEST_ENT")
@Entity(name = "scr_DeeplyNestedO2MTestEntity")
public class DeeplyNestedO2MTestEntity {
    @JmixGeneratedValue
    @Column(name = "ID", nullable = false)
    @Id
    private UUID id;

    @Column(name = "NAME")
    private String name;
    @JoinColumn(name = "COMPOSITION_O2M_TEST_ENTITY_ID", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    private CompositionO2MTestEntity compositionO2MTestEntity;

    public CompositionO2MTestEntity getCompositionO2MTestEntity() {
        return compositionO2MTestEntity;
    }

    public void setCompositionO2MTestEntity(CompositionO2MTestEntity compositionO2MTestEntity) {
        this.compositionO2MTestEntity = compositionO2MTestEntity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    @InstanceName
    @DependsOnProperties({"name"})
    public String getInstanceName() {
        return String.format("%s", name);
    }
}