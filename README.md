El proyecto cuenta con un archivo .nvmrc por lo cual sera facil con un versionador de software como *nvm* usar la version correcta de node v16.19.0

Una vez que tengas nvm instalado basta con estar en el directorio raiz del proyecto y ejecutar nvm use (si no tienes la version correcta instalada hace falta instalarla)

Para ejecutar el ambiente de desarrollo usar el comando *yarn dev*
Para ejecutar storybook usar el comando *yarn storybook*

El proyecto esta creado con una arquitectura atomica [referencia de youtube min 12](https://www.youtube.com/watch?v=W-h1FtNYim4)

la estructura del proyecto en el frontend se centra principalmente en las carpetas:
```
app y stories

├── README.md
├── app
│   ├── api
│   ├── layout.tsx
│   ├── page.module.scss
│   └── page.tsx
├── public
│   ├── next.svg
│   ├── thirteen.svg
│   └── vercel.svg
├── stories

```

