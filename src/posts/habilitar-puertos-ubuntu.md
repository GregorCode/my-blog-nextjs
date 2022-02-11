---
title: 'Habilitar puertos específicos en Firewalld y UFW (Ubuntu)'
author: 'Gregorys González'
date: '2022-01-22'
---

Tanto Firewalld como UFW son cortafuegos que pueden configurar las iptables las cuales son usadas para implementar reglas de tráfico de redes persistentes.

Para habilitar el puerto 80 en **Firewalld**, se debe ejecutar los siguientes comandos:

```
$ sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
$ sudo firewall-cmd --reload
```

Normalmente el UFW viene deshabilitado en Ubuntu por lo que primero se debería habilitar UFW y luego habilitar el puerto.
Para habilitar **UFW** y luego el puerto 80, se debe ejecutar los siguientes comandos:

```
$ sudo ufw enable
$ sudo ufw allow 80/tcp
```

> **Nota**: Al habilitar UFW, verificar si también esta habilitado Firewalld, al estar habilitados los dos cortafuegos, ambos estarán creando reglas en las iptables y lo más recomendable es que se use uno solo, salvo en ocasiones especiales donde se necesite tener más de un cortafuego habilitado.
