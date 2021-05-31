package com.company.scr.entity.constraints;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.TYPE, ElementType.ANNOTATION_TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = PricePolicyComplaintValidator.class)
@Documented
public @interface PricePolicyComplaint {
    String message() default "{msg://com.company.scr.entity.constraints/Car.PricePolicyCompliant.constraintViolationMessage}";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
