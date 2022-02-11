---
title: 'Crear en Docker una red donde se puedan alojar tus contenedores'
author: 'Gregorys González'
date: '2022-01-12'
---

**Docker** nos permite crear subredes para alojar los contenedores.

Para crear la red en docker podemos usar el siguiente comando:

```
$ sudo docker network create --subnet 10.10.0.0/16 mynet
```

Luego podemos correr un contenedor en la red creada, asi:

```
$ docker container run -d -p 8080:80 --network mynet --name web nginx
```

Podemos inspeccionar el contenedor usando:

```
$ docker container inspect nginx
```

En uno de las lineas del json devuelto por docker se podrá apreciar que la ip pertenece a la red creada:

```
"IPAdress": "10.10.0.2",
```

Para hacerlo con docker-compose, en cada servicio se debe apuntar a la red creada anteriormente (mynet) de esta manera:

```
version: '3.4'
    services:
        web:
            image: jboss/wildfly
            ports:
                - 18080:8080
            networks:
                - mynet
        db:
            image: postgres:9.5.6
            ports:
                - 15432:5432
            networks:
                - mynet

networks:
    mynet:
        external:
            name: mynet
```
