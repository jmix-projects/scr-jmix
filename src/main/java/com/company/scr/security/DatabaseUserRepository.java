package com.company.scr.security;

import com.company.scr.entity.User;
import io.jmix.securitydata.user.AbstractDatabaseUserRepository;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Map;
import java.util.Set;

@Primary
@Component("scr_UserRepository")
public class DatabaseUserRepository extends AbstractDatabaseUserRepository<User> {

    @Override
    protected Class<User> getUserClass() {
        return User.class;
    }

    @Override
    public Map<UserDetails, String> resetPasswords(Set<UserDetails> users) {
        throw new UnsupportedOperationException("Not implemented");
    }

    @Override
    public void resetRememberMe(Collection<UserDetails> users) {
        throw new UnsupportedOperationException("Not implemented");
    }

    @Override
    protected User createAnonymousUser() {
        User user = super.createAnonymousUser();
        user.setAuthorities(new GrantedAuthoritiesBuilder()
                .addResourceRole(GraphqlFullAccessRole.CODE)
                .addResourceRole(FullAccessRole.ROLE_NAME)
                .build());
        return user;
    }
}