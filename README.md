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

## Documentación

Para más información sobre la arquitectura, el objetivo del proyecto e información relevante para empezar a consumir o 
integrarte a `BEF` te invitamos a que pases por nuestra documentación:

> <a href="http://furydocs.io/bef-schema-registry/guide" target="_blank">Documentación</a> (ingreso con VPN)
>
> <a href="https://furydocs.io/bef-gateway/specs" target="_blank">Swagger</a> (ingreso con VPN)
>
> <a href="https://alejandria-int.prodeng-internal.mercadolibre.com/group/bef" target="_blank">Sitio web</a>

## Contacto

Contactanos por slack en [#help-bef-integration](https://meli.slack.com/archives/C029D4X69HB).

- 📌 Juan Ignacio Paladino juanignacio.paladino@mercadolibre.com 
- 📌 Juan Pablo Estupinan juanpablo.estupinan@mercadolibre.com.co
