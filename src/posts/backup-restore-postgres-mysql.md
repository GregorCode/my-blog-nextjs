---
title: 'Backup y Restore en texto plano de una base de datos en PostgreSQL ó MySQL'
author: 'Gregorys González'
date: '2022-02-05'
---

Las copias de seguridad son de suma importancia en cualquier entorno y más aún si nos referimos a Base de Datos. Las bases de datos suelen guardar información muy valiosa y las cuales están en un cambio contínuo, esto hace que sea imprescindible mantener un buen sistema de Backups, en este punto es donde entra postgresql con pg_dump y mysql con mysqldump.

Tanto pg_dump como mysqldump permiten desde la Terminal y con una simple instrucción realizar un backup de una base de datos específica.

**POSTGRESQL:**

Para hacer el backup de la base:

```
$ pg_dump -U postgres -d nombrebase > archivo.sql
```

Para hacer el restore de la base:

```
$ psql -U postgres -d nombrebase < archivo.sql
```

**MYSQL:**

Para hacer el backup de la base:

```
$ mysqldump -u usuario -h localhost 'nombrebase' > archivo.sql -p
```

Para hacer el restore de la base:

```
$ mysql -u usuario -h localhost 'nombrebase' < archivo.sql -p
```
