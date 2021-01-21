package com.company.scr;

import com.company.scr.entity.CarDto;
import graphql.schema.StaticDataFetcher;
import graphql.schema.idl.RuntimeWiring;
import io.jmix.core.metamodel.model.MetaClass;
import io.jmix.graphql.schema.SchemaBuilder;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.Collections;

@Component
public class ScrSchemaBuilder extends SchemaBuilder {

    @Override
    protected RuntimeWiring.Builder buildRuntimeWiring(Collection<MetaClass> allPersistentMetaClasses) {
        RuntimeWiring.Builder rwBuilder = super.buildRuntimeWiring(allPersistentMetaClasses);

        CarDto carDto = new CarDto();
        carDto.setManufacturer("Tesla");
        carDto.setPrice(new BigDecimal(1000000));

        rwBuilder.type(SCHEMA_QUERY, typeWiring -> typeWiring
                .dataFetcher("carDtoList", new StaticDataFetcher(Collections.singletonList(carDto))));

        return rwBuilder;
    }
}
