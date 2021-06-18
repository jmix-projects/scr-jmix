package com.company.scr.screen.technicalcertificate;

import io.jmix.ui.screen.*;
import com.company.scr.entity.TechnicalCertificate;

@UiController("scr_TechnicalCertificate.browse")
@UiDescriptor("technical-certificate-browse.xml")
@LookupComponent("technicalCertificatesTable")
public class TechnicalCertificateBrowse extends StandardLookup<TechnicalCertificate> {
}