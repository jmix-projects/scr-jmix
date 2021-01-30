package com.company.scr.screen.customer;

import io.jmix.ui.screen.*;
import com.company.scr.entity.sales.Customer;

@UiController("scr_Customer.browse")
@UiDescriptor("customer-browse.xml")
@LookupComponent("customersTable")
public class CustomerBrowse extends StandardLookup<Customer> {
}