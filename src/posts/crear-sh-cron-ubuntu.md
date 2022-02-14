---
title: 'Crear sh y ejecutarlo con Cron cada 5 minutos. Ubuntu'
author: 'Gregorys González'
date: '2022-02-12'
---

Crearemos un .sh que nos permita reiniciar el servidor de aplicaciones Tomcat cada cierto tiempo.

Source del archivo ReinicioTomcat.sh:

```
#!/bin/bash

Fecha=`date`
CantidadProcesos=$(ps aux | grep java | wc -l)

if (( CantidadProcesos >= 1 )); then
    echo "El proceso de tomcat esta arriba --- $Fecha"
else
    sudo /etc/init.d/tomcat restart
    echo "Reiniciando Servidor Tomcat --- $Fecha"
fi
```

Ahora colocamos este archivo .sh en el crontab, en Ubuntu este archivo se encuentra en /etc/crontab:

```
$ sudo vi /etc/crontab
```

Editamos el archivo y agregamos:

```
*/5 * * * * root /home/user/ReinicioTomcat.sh >> /var/log/TomcatCrontab.log
```

Este .sh se ejecutará cada 5 minutos y verifica si el proceso java de tomcat esta arriba, si no esta, se reinicia el Tomcat. La salida del .sh la guardo en el archivo TomcatCrontab.log para llevar un registro de cuantas veces se ha reiniciado el tomcat.

> **Nota:** Si no se ejecuta por un tema de permisos, cambiar los permisos al .sh, un ejemplo común puede ser:

```
sudo chmod 777 ReinicioTomcat.sh
```
