package com.company.scr.entity.test.ids;

import io.jmix.core.entity.annotation.JmixGeneratedValue;
import io.jmix.core.metamodel.annotation.JmixEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@JmixEntity
@Table(name = "SCR_TRICKY_ID_TEST_ENTITY")
@Entity(name = "scr_TrickyIdTestEntity")
public class TrickyIdTestEntity {

    @Column(name = "TRICKY_ID", nullable = false)
    @JmixGeneratedValue
    @Id
    private Long trickyId;

    @Column(name = "OTHER_ATTR")
    private String otherAttr;

    public String getOtherAttr() {
        return otherAttr;
    }

    public void setOtherAttr(String otherAttr) {
        this.otherAttr = otherAttr;
    }

    public Long getTrickyId() {
        return trickyId;
    }

    public void setTrickyId(Long trickyId) {
        this.trickyId = trickyId;
    }
}