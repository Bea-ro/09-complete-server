## Endpoints realted to https://localhost:4001/api
*(auth) in description indicates that authentication is required for the request 

Page not found example: https://localhost:4001/api/autor

### AUTHORS MODEL: 

| HTTP Request | Endpoint      | Description                 |
|--------------|---------------|-----------------------------|
| GET          | /authors      | See all authors             |
| GET          | /authors/:id  | See author by id            |
| POST         | /authors      | Create new author (auth)    |
| PUT          | /authors/:id  | Edit existing author (auth) |
| DELETE       | /authors/:id  | Remove author (auth)        |

### ARTWORKS MODEL: 

| HTTP Request | Endpoint      | Description                    |
|--------------|---------------|--------------------------------|
| GET          | /artworks     | See all artworks               |
| GET          | /artworks/:id | See artwork by id              |
| POST         | /artworks     | Create artwork (auth)          |
| PUT          | /artworks/:id | Edit existing artwork (auth)   |
| PUT          | /artworks/:id | Add image to an artwork (auth) |
| DELETE       | /artworks/:id | Remove artwork (auth)          |

### MOVEMENTS MODEL: 

| HTTP Request | Endpoint        | Description                   |
|--------------|-----------------|-------------------------------|
| GET          | /movements      | See all movements             |
| GET          | /movements/:id  | Movement by id                |
| POST         | /movements      | Create new movement (auth)    |
| PUT          | /movements/:id  | Edit existing movement (auth) |
| DELETE       | /movements/:id  | Remove movement (auth)        |
 
### RELATIONAL MODELING:

| HTTP Req. | Endpoint             | Description                                    |
|-----------|----------------------|------------------------------------------------|
| GET       | /authors/:id         | Add artworks data to an author                 |
| GET       | /artworks/:id        | Add author data to an artwork                  |
| GET       | /movements/:id       | Add artworks and authors data to a movement    |
| PUT       | /authors/:id/atrwork | Add or remove artwork to/from an author (auth) |
| DELETE    | /artworks/:id/author | Remove author field from an artwork (auth)     |

### USER MODEL:

| HTTP Request | Endpoint        | Description                           |
|--------------|-----------------|---------------------------------------|
| GET          | /users          | See all users (auth)                  |
| POST         | /users/register | Register new user                     |
| POST         | /users/login    | Login user                            |
| PUT          | /users/:id      | Add avatar to an existing user (auth) |
| DELETE       | /users/:id      | Deregister user (auth)                |


### SEED:
seed.js field for reference data.  

