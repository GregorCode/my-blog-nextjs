---
title: 'Crear Proxy reverso entre Nginx y Tomcat con Docker'
author: 'Gregorys González'
date: '2022-02-10'
---

Las aplicaciones web desarrolladas en Java se despliegan en un contenedor de servlets o un servidor de aplicaciones como Tomcat o Wildfly, en muchos casos, para que los usuarios puedan acceder a las aplicaciones desplegadas en estos servidores se configura un servidor web como Nginx o Apache con el objetivo de que se realicen algunas tareas de seguridad, balanceo de carga, redirecciones, forzar el uso del protocolo HTTPS, entre otros.

Uno forma de tener estos servicios corriendo en el mismo servidor es usar Docker y Docker compose, primero creamos un archivo llamado Docker-compose.yml y definiremos 2 servicios, uno para Tomcat y otro para Nginx:

```
version: '3'

services:
  tomcat:
    image: tomcat
    container_name: "Tomcat"
    restart: always

  nginx:
    image: nginx:alpine
    container_name: "Nginx"
    volumes:
      - ./conf/nginx.conf:/etc/nginx/conf.d/default.conf:ro
    links:
      - tomcat
    ports:
      - "80:80"
    restart: always
```

En el servicio de tomcat no expongo ningún puerto, Docker automáticamente expondrá el puerto 8080, que es donde normalmente escucha el Tomcat.

Para que Nginx funcione como proxy reverso crearemos un archivo nginx.conf donde agregaremos el comando proxy_pass el cual permite redireccionar desde el servidor web (Nginx) al servidor de aplicaciones (Tomcat):

```
upstream tomcat {
        server tomcat:8080;
}

server {
        listen 80;

        location / {
                proxy_pass http://tomcat;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-Proto https;
        }
}
```

Para levantar los servicios:

```
$ docker-compose up -d
```

Visitar localhost:80 y se podra apreciar como el proxy reverso redireccionará al Tomcat.
