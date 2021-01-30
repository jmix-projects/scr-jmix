package com.company.scr.screen.orderline;

import io.jmix.ui.screen.*;
import com.company.scr.entity.sales.OrderLine;

@UiController("scr_OrderLine.edit")
@UiDescriptor("order-line-edit.xml")
@EditedEntityContainer("orderLineDc")
public class OrderLineEdit extends StandardEditor<OrderLine> {
}