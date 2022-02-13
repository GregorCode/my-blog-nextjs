---
title: 'Ampliar el numero de inodos en una partición. Ubuntu'
author: 'Gregorys González'
date: '2022-02-11'
---

En mi trabajo, tenemos un servidor de QA donde habíamos creado una partición para que Docker pudiera guardar toda su meta-data ahí, con el pasar del tiempo, después de tantos despliegues de aplicaciones y subida de archivos al servidor, nos quedamos sin disponibilidad de inodos, un inodo almacena información sobre un archivo o directorio. Cada archivo se identifica por un número de inodo. Este número es único dentro de todo el sistema de archivos. Si una partición se queda sin inodos disponibles, no se permitirá la creación de archivos nuevos en la partición.

Para solventar el problema lo que hice fue formatear la partición colocándole un mayor número de inodos, acá les dejo los pasos que hice en Ubuntu 20.04.1 LTS (Focal Fossa):

> **Nota**: hacer un backup de la partición, siempre es importante hacer un backup antes de tocar las particiones en cualquier sistema operativo.

Listamos todos los puntos de montaje:

```
sudo fdisk -l
```

Identificamos cual es la partición que se quedo sin inodos y miramos el tamaño de los inodos que se permitían, en nuestro caso la partición solo permitía 6 millones de inodos:

```
sudo tune2fs -l /dev/sdb1 | grep Inode
```

Desmontamos la particion:

```
sudo umount /dev/sdb1
```

Cambiamos el numero de inodos, en este caso lo ampliaré a 50 millones de inodos:

```
sudo mkfs.ext4 -N 50000000 -I 256 /dev/sdb1
```

Montamos la partición de nuevo, en mi caso:

```
sudo mount /dev/sdb1 /DOCKER
```

Nos fijamos si quedo bien la nueva configuración:

```
df -ih
```
