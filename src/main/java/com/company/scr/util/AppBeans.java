package com.company.scr.util;

import io.jmix.core.common.util.Preconditions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

@Service
public class AppBeans {

    private static ApplicationContext context;

    @Autowired
    public AppBeans(ApplicationContext ac) {
        context = ac;
    }

    public static ApplicationContext getContext() {
        return context;
    }

    public static <T> T get( Class<T> beanType) {
        return context.getBean(beanType);
    }

}
