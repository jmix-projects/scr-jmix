package com.company.scr.screen.technicalcertificate;

import io.jmix.ui.screen.*;
import com.company.scr.entity.TechnicalCertificate;

@UiController("scr$TechnicalCertificate.edit")
@UiDescriptor("technical-certificate-edit.xml")
@EditedEntityContainer("technicalCertificateDc")
public class TechnicalCertificateEdit extends StandardEditor<TechnicalCertificate> {
}