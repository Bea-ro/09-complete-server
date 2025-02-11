> Deployed API 👉 https://09-complete-server-production.up.railway.app/api

## Skills

### Javascript, MongoDB, Express, React, Node (MERN)

- Accesible from any domain by **CORS** configuration.
- **Rate limit** at 50 requests / 3 minutes.
- Protected routes by **JWT** (1 hour expiration).
- Images upload and storage in **Clodinary**.
- Deployed on **Railway**.

## Endpoints realted to https://complete-server-rtc.onrender.com/api

Authentication is required for the requests whose description cointains (auth).

Page not found example: https://09-complete-server-production.up.railway.app/abc

### AUTHORS MODEL:

| HTTP Request | Endpoint     | Description                 |
| ------------ | ------------ | --------------------------- |
| GET          | /authors     | See all authors             |
| GET          | /authors/:id | See author by id            |
| POST         | /authors     | Create new author (auth)    |
| PUT          | /authors/:id | Edit existing author (auth) |
| DELETE       | /authors/:id | Remove author (auth)        |

### ARTWORKS MODEL:

| HTTP Request | Endpoint      | Description                    |
| ------------ | ------------- | ------------------------------ |
| GET          | /artworks     | See all artworks               |
| GET          | /artworks/:id | See artwork by id              |
| POST         | /artworks     | Create artwork (auth)          |
| PUT          | /artworks/:id | Edit existing artwork (auth)   |
| PATCH        | /artworks/:id | Add image to an artwork (auth) |
| DELETE       | /artworks/:id | Remove artwork (auth)          |

### MOVEMENTS MODEL:

| HTTP Request | Endpoint       | Description                   |
| ------------ | -------------- | ----------------------------- |
| GET          | /movements     | See all movements             |
| GET          | /movements/:id | Movement by id                |
| POST         | /movements     | Create new movement (auth)    |
| PUT          | /movements/:id | Edit existing movement (auth) |
| DELETE       | /movements/:id | Remove movement (auth)        |

### RELATIONAL MODELING:

| HTTP Req. | Endpoint             | Description                                    |
| --------- | -------------------- | ---------------------------------------------- |
| GET       | /authors/:id         | Add artworks data to an author                 |
| GET       | /artworks/:id        | Add author data to an artwork                  |
| GET       | /movements/:id       | Add artworks and authors data to a movement    |
| PUT       | /authors/:id/atrwork | Add or remove artwork to/from an author (auth) |
| DELETE    | /artworks/:id/author | Remove author field from an artwork (auth)     |

### USER MODEL:

| HTTP Request | Endpoint        | Description                           |
| ------------ | --------------- | ------------------------------------- |
| GET          | /users          | See all users (auth)                  |
| POST         | /users/register | Register new user                     |
| POST         | /users/login    | Login user                            |
| PUT          | /users/:id      | Add avatar to an existing user (auth) |
| DELETE       | /users/:id      | Deregister user (auth)                |

### SEED:

See seed.js file for reference data.
