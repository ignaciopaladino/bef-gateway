# BEF - Gateway

![Maintenance](https://img.shields.io/badge/maintained%3F-yes-green.svg)
![technology NodeJS](https://img.shields.io/badge/technology-nodejs-green.svg)
![3.8.0](https://img.shields.io/badge/version-v14-green.svg)

- [Instalación](#instalación) 🚀
- [Documentación](#documentación) 📖
- [Contacto](#contacto) 📬

## Instalación

### Requerimientos previos:

```sh
fury get bef-gateway
cd bef-gateway/
npm install
```

### Ejecución

Antes de ejecutar el proyecto hay que buildearlo:
```sh
npm run build
```

Para ejecutar la aplicación localmente basta con ejecutar:
```sh
npm run start-dev
```

### Listo
Para chequear que la app levantó correctamente
```sh
curl 'http://localhost:8080/ping'
```

### Testing
Para la ejecución de los tests locales, ejecutar:
````sh
npm run test
````