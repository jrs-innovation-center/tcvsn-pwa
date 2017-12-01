# Veteran Support Base

Veteran Support Base Progressive Web App (PWA)

* [User Stories](./docs/user-stories.md)
* [Wireframes](./docs/wireframes.md)
* [API](./api/readme.md)

## Developer Setup Instructions

The developer setup consists of a database server, an api server and an
application server.

## Run each app manually

### CouchDB

In a terminal run a local couchdb

```bash
mkdir data
docker run -p 5984:5984 -v $(pwd/data):/opt/couchdb/data apache/couchdb
```

### API

In a terminal run the api server

```bash
cd api
```

> If this is your first time setting up the enviroment, make sure you load the
> test data and indexes

```bash
yarn load
```

Then start the server in dev mode

```bash
yarn dev
```

## APP

In a terminal run the app server

```bash
cd app
```

> If this is your first time, setup your .env file - also make sure the url is
> pointing to your api server.

```bash
echo REACT_APP_BASE_URL=http://localhost:5000
```

We display a map of the veteran resource at the top of the resource card.  You also need the api key for google maps.  Contact us for the secret. 

```bash
echo REACT_APP_MAP=<contact a repo admin for secret>
```


```bash
yarn start
```

> Trouble running the dev setup, post an issue.

> EXPERIMENTAL - You can start all three of these servers up using one foreman
> proc file, or run them in separate windows.

```
yarn start
```
