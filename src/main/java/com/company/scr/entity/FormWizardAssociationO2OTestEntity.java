package com.company.scr.entity;

import io.jmix.core.entity.annotation.JmixGeneratedValue;
import io.jmix.core.metamodel.annotation.JmixEntity;

import javax.persistence.*;
import java.util.UUID;

@JmixEntity
@Table(name = "SCR_FORM_WIZARD_ASSOCIATION_O2")
@Entity(name = "scr_FormWizardAssociationO2OTestEntity")
public class FormWizardAssociationO2OTestEntity {
    @JmixGeneratedValue
    @Column(name = "ID", nullable = false)
    @Id
    private UUID id;

    @Column(name = "NAME")
    private String name;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "associationO2O")
    private FormWizardTestEntity formWizardTestEntity;

    public FormWizardTestEntity getFormWizardTestEntity() {
        return formWizardTestEntity;
    }

    public void setFormWizardTestEntity(FormWizardTestEntity formWizardTestEntity) {
        this.formWizardTestEntity = formWizardTestEntity;
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
}