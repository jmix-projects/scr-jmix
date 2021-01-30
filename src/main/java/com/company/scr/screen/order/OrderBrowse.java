package com.company.scr.screen.order;

import io.jmix.ui.screen.*;
import com.company.scr.entity.sales.Order;

@UiController("scr_Order.browse")
@UiDescriptor("order-browse.xml")
@LookupComponent("ordersTable")
public class OrderBrowse extends StandardLookup<Order> {
}