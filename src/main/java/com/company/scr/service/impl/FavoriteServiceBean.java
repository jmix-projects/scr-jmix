package com.company.scr.service.impl;

import com.company.scr.entity.Car;
import com.company.scr.entity.CarType;
import com.company.scr.entity.FavoriteCar;
import com.company.scr.entity.User;
import com.company.scr.service.FavoriteService;
import io.jmix.core.DataManager;
import io.jmix.core.Metadata;
import io.jmix.core.entity.EntityValues;
import io.jmix.core.security.CurrentAuthentication;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service(FavoriteService.NAME)
public class FavoriteServiceBean implements FavoriteService {

    @Inject
    private DataManager dataManager;
    @Inject
    private Metadata metadata;
    @Inject
    private CurrentAuthentication currentAuthentication;

    @Override
    public void addFavorite(UUID carId, String notes) {
        Car car = dataManager.load(Car.class).id(carId).one();
        Objects.requireNonNull(car);
        _addFavorite(car, notes);
    }

    @Override
    public FavoriteCar addFavorite(Car car, String notes) {
        return _addFavorite(car, notes);
    }

    @Override
    public FavoriteCar addFavorite(FavInfo favInfo) {
        return _addFavorite(favInfo.getCar(), favInfo.getNotes());
    }

    @Override
    public List<FavoriteCar> getFavorites() {
        return dataManager.load(FavoriteCar.class)
                .query("select f from scr_FavoriteCar f where f.user.id = :uid")
                .parameter("uid", getCurrentUserId())
                .fetchPlan("favoriteCar-view")
                .list();
    }

    @Override
    public List<FavoriteCar> getFavoritesByType(CarType carType) {
        return dataManager.load(FavoriteCar.class)
                .query("" +
                        "select f from scr_FavoriteCar f " +
                        "where " +
                        "   f.user.id = :uid" +
                        "   and f.car.carType = :carTypeId")
                .parameter("uid", getCurrentUserId())
                .parameter("carTypeId", carType.getId())
                .fetchPlan("favoriteCar-view")
                .list();
    }

    @Override
    public void refreshCache() {
        // method without params and return types for cuba-rest-js test
        System.out.println("FavoriteServiceBean.refreshCache");
    }

    private FavoriteCar _addFavorite(Car car, String notes) {
        FavoriteCar favoriteCar = metadata.create(FavoriteCar.class);

        favoriteCar.setCar(car);
        favoriteCar.setUser((User)currentAuthentication.getUser());
        favoriteCar.setNotes(notes);

        return dataManager.save(favoriteCar);
    }

    private Object getCurrentUserId() {
        return EntityValues.getId(currentAuthentication.getUser());
    }
}