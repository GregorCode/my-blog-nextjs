---
title: 'Docker compose para Portainer'
author: 'Gregorys González'
date: '2022-01-29'
---

**Portainer** es una interfaz gráfica desde donde se puede gestionar y trabajar con contenedores Docker de una forma mucho más intuitiva y sencilla. La GUI se basa en web y es multiplataforma. También nos permite administrar los contenedores de forma remota, forma local o trabajar con contenedores en otras máquinas o servidores.

Para instalarlo en Docker con Docker compose:

```
version: '3'

services:
  portainer:
    image: portainer/portainer:latest
    container_name: Portainer
    command: -H unix:///var/run/docker.sock
    restart: always
    ports:
      - 9876:9000
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./portainer_data:/data

volumes:
  portainer_data:
```
