package com.company.scr.screen.product;

import io.jmix.ui.screen.*;
import com.company.scr.entity.sales.Product;

@UiController("scr_Product.edit")
@UiDescriptor("product-edit.xml")
@EditedEntityContainer("productDc")
public class ProductEdit extends StandardEditor<Product> {
}