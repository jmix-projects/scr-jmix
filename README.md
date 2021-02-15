# Jmix Sample Project - Car Rent
Sample Jmix project with non trivial model, which used as base for tests in 
[@haulmont/jmix-frontend](https://github.com/haulmont/jmix-frontend). 

## Data
### Users
admin/admin<br>
mechanic/1<br>
manager/2

## Development
### Create Init Script With Data Already Added in App
* Export data from table <TABLE_NAME>
```bash
sudo -u postgres pg_dump --table=<TABLE_NAME> --data-only --column-inserts scr-jmix
```
* Paste generated script to [data.sql](src/main/resources/com/company/scr/liquibase/data.sql) 
* Script will be executed when database will be created next time  


## GraphQL endpoint
[http://localhost:8080/graphql]()


## GraphiQL endpoint 
[http://localhost:8080/graphiql]()

## GraphQL filter usage example
```
{
  carCount
  carList(limit: 10, offset: 0, orderBy: {createdDate: ASC}, filter: [{manufacturer: {EQ: "Mercedes"}}]) {
    id
    manufacturer
    model
  }
}
```
