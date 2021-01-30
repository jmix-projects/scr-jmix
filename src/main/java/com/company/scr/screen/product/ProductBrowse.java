package com.company.scr.screen.product;

import io.jmix.ui.screen.*;
import com.company.scr.entity.sales.Product;

@UiController("scr_Product.browse")
@UiDescriptor("product-browse.xml")
@LookupComponent("productsTable")
public class ProductBrowse extends StandardLookup<Product> {
}