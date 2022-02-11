---
title: 'Cambiar el directorio por defecto donde Docker guarda su metadata en Ubuntu'
author: 'Gregorys González'
date: '2022-01-15'
---

Para cambiar el directorio donde **Docker** guarda su metadata se debe crear un archivo llamado daemon.json el cual permite configurar el demonio de Docker. El archivo debe estar en la ruta /etc/docker/ si el archivo no se encuentra, se debe crear.

en el archivo json debemos agregar lo siguiente:

```
{
    "data-root": "/home/user/docker/data"
}
```

Con esto le estamos diciendo al demonio de Docker que guarde toda su metadata (imagenes, redes, volúmenes, contenedores, etc.) en el directorio: **/home/user/docker/data**

Cabe destacar que el directorio puede estar en otra partición distinta a donde esta instalado el sistema operativo.

Por último, se debe reiniciar el Docker con:

```
$ sudo systemctl restart docker
```
