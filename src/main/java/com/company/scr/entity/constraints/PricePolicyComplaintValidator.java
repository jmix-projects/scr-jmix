package com.company.scr.entity.constraints;

import com.company.scr.entity.Car;
import com.company.scr.util.AppBeans;
import io.jmix.core.EntityStates;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.math.BigDecimal;

public class PricePolicyComplaintValidator implements ConstraintValidator<PricePolicyComplaint, Car>  {
    private static final int mileageThreshold = 100_000;
    private static final BigDecimal priceThreshold = BigDecimal.valueOf(5_000);

    @Override
    public boolean isValid(Car car, ConstraintValidatorContext context) {
        EntityStates entityStates =  AppBeans.get(EntityStates.class);

        if (!entityStates.isLoaded(car, "price")
                || !entityStates.isLoaded(car, "mileage")
                || car.getPrice() == null
                || car.getMileage() == null) {
            return true;
        }

        boolean isPriceOverThreshold = car.getPrice().compareTo(priceThreshold) > 0;
        boolean isMileageOverThreshold = car.getMileage() > mileageThreshold;

        return !(isPriceOverThreshold && isMileageOverThreshold);
    }
}
