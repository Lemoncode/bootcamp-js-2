# Laboratorio React - Banca Online

## Objetivo

El objetivo de este laboratorio es crear una aplicación web utilizando React aplicando todos los conocimientos obtenidos en el bootcamp.

## Instalación

Para instalar el proyecto, ejecutar el siguiente comando:

```bash
npm install
```

Con este comando se instalarán tanto las dependencias de la aplicación como las del servidor.

## Ejecución

Para ejecutar el proyecto, ejecutar el siguiente comando:

```bash
npm run dev
```

También se puede hacer desde la raíz de la aplicación, arrancar la aplicación por separado:

```bash
npm run dev
```

Y el servidor, vamos a la carpeta server:

```bash
cd server
```

Y ejecutamos el siguiente comando:

```bash
npm start
```

## Acceso

Para poder logarse en la aplicación, se debe utilizar el siguiente usuario y contraseña:

```bash
Usuario: admin@email.com
Contraseña: test
```

## Descripción

La aplicación consiste en una banca online, donde el usuario puede ver sus cuentas, ver los movimientos de una cuenta y hacer transferencias.

Vamos a tener las siguientes pantallas:

- Login
- Mis cuentas
- Creación y edición de cuentas
- Movimientos de una cuenta
- Transferencias tanto desde un enlace cómo a partir de movimientos hacer una transferencia desde una cuenta determinada.

## Requisitos

- La aplicación debe está desarrollada con React.
- El backend está montado sobre JSON Server.
- La aplicación es responsive.
- La aplicación tiene un menú superior con las siguientes opciones:
  - Mis cuentas
  - Transferencias
  - Movimientos, solo se quiere ver los movimientos de una cuenta.

## Servidor

El servidor está montado sobre JSON Server, y tiene los siguientes endpoints:

- La URL base es: http://localhost:3000/api, se puede cambiar el puerto en el fichero package.json.
- Para obtener el listado de cuentas: GET /account-list
- Para obtener una cuenta: GET /account-list/:id
- Para crear una cuenta: POST /account-list
- Para editar una cuenta: PATCH /account-list/:id, por el tema que cuando se crea una cuenta en backend se asignan unos campos específicos, que se pueden ver en el fichero account.middleware.js.
- Para obtener los movimientos de una cuenta: GET /movements/:id
- Para hacer una transferencia: POST /transfer.
