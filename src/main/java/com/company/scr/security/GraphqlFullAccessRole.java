package com.company.scr.security;

import io.jmix.security.model.SecurityScope;
import io.jmix.security.role.annotation.GraphQLPolicy;
import io.jmix.security.role.annotation.ResourceRole;
import io.jmix.security.role.annotation.SpecificPolicy;

@ResourceRole(name = "GraphQL: full access", code = GraphqlFullAccessRole.CODE, description = "Enables full access to GraphQL API")
public interface GraphqlFullAccessRole {
    String CODE = "graphql-full-access";

    @SpecificPolicy(resources = "graphql.enabled")
    @GraphQLPolicy(operations = "*")
    void graphqlAccess();
}
