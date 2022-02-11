---
title: 'Comandos mas usados en Docker'
author: 'Gregorys González'
date: '2022-01-18'
---

**Comandos para gestionar contenedores (Docker):**

Descargar una imagen docker:

```
$ docker pull nombre_imagen
```

Listar los contenedores:

```
$ docker ps
```

Iniciar un contenedor:

```
$ docker start id_contenedor
```

Detener un contenedor en estado Up:

```
$ docker stop id_contenedor
```

Eliminar un contenedor con estado down:

```
$ docker rm id_contenedor
```

Mostrar todas las redes de los contenedores:

```
$ docker networks ls
```

Mostrar todas las imágenes que tenemos descargadas:

```
$ docker images
```

Mostrar todos los contenedores que están en estado Up, Down, Exited, etc:

```
$ docker ps –a
```

Mostrar detalles de cuantos contenedores existen, contenedores Up, Down, memoria, etc:

```
$ docker info
```

Filtrar por nombre de contenedor:

```
$ docker ps -a | grep nombre_contenedor
```

Mostrar json con toda la información del contenedor:

```
$ docker inspect id_contenedor
```

Mostrar los logs del contenedor:

```
$ docker logs id_contenedor
```

Copiar archivos dentro de un contenedor:

```
$ docker cp backup.sql Nombre_Contenedor:/home/ggonzalez
```

Ejecutar comandos dentro de un contenedor:

```
$ docker exec -it id_contenedor sh
```

**Comandos para gestionar contenedores (Docker-Compose):**

Para ejecutar estos comandos es necesario estar posicionados en la carpeta donde está el archivo yml

Levantar todos los contenedores especificados en el archivo yml, se mostrara por consola todos las tareas que hace docker, logs, etc:

```
$ docker-compose up
```

Levantar en segundo plano todos los contenedores especificados en el archivo yml, no muestra las tareas que hace docker, ni logs, etc:

```
$ docker-compose up –d
```

Reiniciar todos los contenedores especificados en el archivo yml:

```
$ docker-compose restart
```

Eliminar todos los contenedores especificados en el archivo yml:

```
$ docker-compose down
```
