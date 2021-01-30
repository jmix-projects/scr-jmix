package com.company.scr.screen.customer;

import io.jmix.ui.screen.*;
import com.company.scr.entity.sales.Customer;

@UiController("scr_Customer.edit")
@UiDescriptor("customer-edit.xml")
@EditedEntityContainer("customerDc")
public class CustomerEdit extends StandardEditor<Customer> {
}