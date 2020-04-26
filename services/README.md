# Services

## Getting the database set up

`yarn` will install all necessary Node dependencies.

You will need Docker in order to install a containerised MySQL dev environment. After getting docker, run the following command anywhere:

```sh
docker run \
  -p 0.0.0.0:7999:3306 \
  --name gsp-db \
  -e MYSQL_ROOT_PASSWORD=password \
  -e MYSQL_USER=gsp-dev \
  -e MYSQL_PASSWORD=password \
  -e MYSQL_DATABASE=gsp \
  -d mysql:5.7.29
```

This will create a Docker instance called `gsp-db`, running MySQL v5.7.29, with the root password being `password`. It also creates a database called `gsp`, creates a user called `gsp-dev` (with password `password`), and assigns that user full permissions onto the `gsp` database.
