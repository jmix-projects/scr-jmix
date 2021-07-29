package com.company.scr.entity.test;

import io.jmix.core.DeletePolicy;
import io.jmix.core.entity.annotation.JmixGeneratedValue;
import io.jmix.core.entity.annotation.OnDelete;
import io.jmix.core.metamodel.annotation.Composition;
import io.jmix.core.metamodel.annotation.InstanceName;
import io.jmix.core.metamodel.annotation.JmixEntity;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.PositiveOrZero;
import java.util.List;
import java.util.UUID;

@Table(name = "SCR_COMPOSITION_O2M_TEST_ENTITY")
@JmixEntity
@Entity(name = "scr_CompositionO2MTestEntity")
public class CompositionO2MTestEntity {
    @JmixGeneratedValue
    @Id
    @Column(name = "ID", nullable = false)
    private UUID id;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "DATATYPES_TEST_ENTITY_ID")
    protected DatatypesTestEntity datatypesTestEntity;

    @Column(name = "QUANTITY")
    @PositiveOrZero
    private Integer quantity;

    @InstanceName
    @Column(name = "NAME")
    protected String name;

    @Valid
    @Composition
    @OnDelete(DeletePolicy.CASCADE)
    @OneToMany(mappedBy = "compositionO2MTestEntity")
    protected List<DeeplyNestedO2MTestEntity> deeplyNestedO2Mattr;

    public List<DeeplyNestedO2MTestEntity> getDeeplyNestedO2Mattr() {
        return deeplyNestedO2Mattr;
    }

    public void setDeeplyNestedO2Mattr(List<DeeplyNestedO2MTestEntity> deeplyNestedO2Mattr) {
        this.deeplyNestedO2Mattr = deeplyNestedO2Mattr;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public DatatypesTestEntity getDatatypesTestEntity() {
        return datatypesTestEntity;
    }

    public void setDatatypesTestEntity(DatatypesTestEntity datatypesTestEntity) {
        this.datatypesTestEntity = datatypesTestEntity;
    }
}
