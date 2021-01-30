package com.company.scr.screen.order;

import com.company.scr.entity.sales.OrderLine;
import io.jmix.ui.model.CollectionChangeType;
import io.jmix.ui.model.CollectionContainer;
import io.jmix.ui.model.CollectionPropertyContainer;
import io.jmix.ui.screen.*;
import com.company.scr.entity.sales.Order;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;

@UiController("scr_Order.edit")
@UiDescriptor("order-edit.xml")
@EditedEntityContainer("orderDc")
public class OrderEdit extends StandardEditor<Order> {

    @Autowired
    private CollectionPropertyContainer<OrderLine> linesDc;

    @Subscribe(id = "linesDc", target = Target.DATA_CONTAINER)
    public void onLinesDcCollectionChange(CollectionContainer.CollectionChangeEvent<OrderLine> event) {
        if (event.getChangeType() == CollectionChangeType.REFRESH) {
            return;
        }
        BigDecimal amount = BigDecimal.ZERO;
        for (OrderLine line : linesDc.getItems()) {
            amount = amount.add(line.getProduct().getPrice().multiply(new BigDecimal(line.getQuantity())));
        }
        getEditedEntity().setAmount(amount);
    }

}