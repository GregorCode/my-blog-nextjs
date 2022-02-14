---
title: 'FTP con Docker-compose'
author: 'Gregorys González'
date: '2022-02-13'
---

**FTP (File Transfer Protocol)** es un protocolo de red para la transferencia de archivos entre dos equipos conectados a una red TCP (Transmission Control Protocol), esta basado en la arquitectura cliente-servidor.
Este protocolo permite que desde un equipo (cliente) se pueda conectar a un servidor para descargar archivos desde él o para enviarle archivos, sin importar el sistema operativo que estén usando ambos equipo.

Para crear un FTP con Docker-compose lo podemos hacer de la siguiente manera:

**docker-compose.yml:**

```
version: '3'

services:
  ftpd_server:
    image: stilliard/pure-ftpd
    container_name: 'FTP_DOCKER'
    ports:
      - "21:21"
      - "30000-30009:30000-30009"
    volumes: #recuerde reemplazar /folder_on_disk/ con la ruta donde desea almacenar los archivos en la máquina host
      - "/folder_on_disk/data:/home/username/data"
      - "/folder_on_disk/passwd:/etc/pure-ftpd/passwd"
      # descomentar para ssl/tls, visita https://github.com/stilliard/docker-pure-ftpd#tls
      # - "/folder_on_disk/ssl:/etc/ssl/private/"
   enviroment:
      PUBLICHOST: "localhost"
      FTP_MAX_CLIENTS: 50
      FTP_USER_NAME: admin
      FTP_USER_PASS: admin
      FTP_USER_HOME: /home/username
      # tambien para ssl/tls:
      # ADDED_FLAGS: "--tls=2"
    restart: always
```

levantamos el servicio con:

```
docker-compose up -d
```

luego usamos el programa FileZilla para conectarse al servidor FTP.

Tambien se puede visitar el servicio en el explorador de archivos o algún navegador:

```
ftp://localhost:21/data/
```
