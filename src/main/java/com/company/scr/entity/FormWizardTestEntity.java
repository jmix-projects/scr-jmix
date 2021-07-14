package com.company.scr.entity;

import io.jmix.core.entity.annotation.JmixGeneratedValue;
import io.jmix.core.metamodel.annotation.Composition;
import io.jmix.core.metamodel.annotation.JmixEntity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.UUID;

@JmixEntity
@Table(name = "SCR_FORM_WIZARD_TEST_ENTITY")
@Entity(name = "scr_FormWizardTestEntity")
public class FormWizardTestEntity {
    @JmixGeneratedValue
    @Column(name = "ID", nullable = false)
    @Id
    private UUID id;

    @NotNull
    @Column(name = "NOT_NULL")
    private String notNull;

    @Temporal(TemporalType.DATE)
    @Column(name = "DATE_")
    private Date date;

    @Column(name = "TIME_")
    @Temporal(TemporalType.TIME)
    private Date time;

    @Column(name = "INTEGER_")
    private Integer integer;

    @JoinColumn(name = "COMPOSITION_O2O_ID")
    @Composition
    @OneToOne(fetch = FetchType.LAZY)
    private FormWizardCompositionO2OTestEntity compositionO2O;

    @JoinColumn(name = "ASSOCIATION_O2O_ID")
    @OneToOne(fetch = FetchType.LAZY)
    private FormWizardAssociationO2OTestEntity associationO2O;

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getDate() {
        return date;
    }

    public FormWizardAssociationO2OTestEntity getAssociationO2O() {
        return associationO2O;
    }

    public void setAssociationO2O(FormWizardAssociationO2OTestEntity associationO2O) {
        this.associationO2O = associationO2O;
    }

    public FormWizardCompositionO2OTestEntity getCompositionO2O() {
        return compositionO2O;
    }

    public void setCompositionO2O(FormWizardCompositionO2OTestEntity compositionO2O) {
        this.compositionO2O = compositionO2O;
    }

    public Integer getInteger() {
        return integer;
    }

    public void setInteger(Integer integer) {
        this.integer = integer;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getNotNull() {
        return notNull;
    }

    public void setNotNull(String notNull) {
        this.notNull = notNull;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }
}