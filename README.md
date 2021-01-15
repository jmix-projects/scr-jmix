## GraphQL endpoint
[http://localhost:8080/graphql]()


## GraphiQL endpoint 
[http://localhost:8080/graphiql]()

## GraphQL filter usage example
```
query {
  carList(limit: 2, sort: "+carType", 
    filter: {
        conditions: [{
          property: "manufacturer"
          operator: "="
          value: "LADA"
        }]
    }) {
    id,
    manufacturer,
    carType
  }
}
```
