El proyecto cuenta con un archivo .nvmrc por lo cual sera facil con un versionador de software como *nvm* usar la version correcta de node v16.19.0

Una vez que tengas nvm instalado basta con estar en el directorio raiz del proyecto y ejecutar nvm use (si no tienes la version correcta instalada hace falta instalarla)

Para ejecutar el ambiente de desarrollo usar el comando *yarn dev*
Para ejecutar storybook usar el comando *yarn storybook*

El proyecto esta creado con una arquitectura atomica [referencia de youtube min 12](https://www.youtube.com/watch?v=W-h1FtNYim4)

la estructura del proyecto en el frontend se centra principalmente en las carpetas:
```
app y stories
app/
├── about
│   └── page.tsx
├── api
│   └── hello
│       └── route.ts
├── components
│   ├── atoms
│   │   ├── button
│   │   │   ├── Button.tsx
│   │   │   ├── button.module.scss
│   │   │   └── button.utils.ts
│   │   ├── form
│   │   │   ├── Form.tsx
│   │   │   └── form.module.scss
│   │   ├── h1
│   │   │   ├── H1.tsx
│   │   │   └── h1.module.scss
│   │   ├── image
│   │   │   ├── Image.tsx
│   │   │   ├── image.module.scss
│   │   │   └── image.utils.js
│   │   ├── input
│   │   │   ├── Input.tsx
│   │   │   ├── input.module.scss
│   │   │   └── input.utils.ts
│   │   ├── label
│   │   │   ├── Label.tsx
│   │   │   └── label.module.scss
│   │   ├── main
│   │   │   ├── Main.tsx
│   │   │   └── main.module.scss
│   │   ├── section
│   │   │   ├── Section.tsx
│   │   │   └── section.module.scss
│   │   └── ul
│   │       ├── Ul.tsx
│   │       └── ul.module.scss
│   ├── molecules
│   │   ├── form
│   │   │   ├── FormEyebrows.tsx
│   │   │   └── form.utils.ts
│   │   └── inputsection
│   │       ├── InputSection.tsx
│   │       └── inputsection.utils.ts
│   └── organisms
│       └── form
│           ├── LoginForm.tsx
│           ├── RegisterForm.tsx
│           └── form.utils.tsx
├── foro
│   ├── foro.tsx
│   └── page.tsx
├── globals.css
├── icon.ico
├── layout.tsx
├── page.module.scss
├── page.tsx
└── styles
    ├── _breakpoints.scss
    ├── _flexbox.scss
    ├── _fonts.scss
    ├── _variables.scss
    ├── globals.scss
    └── keyframes
        └── box-shadow.scss

23 directories, 43 files
```
stage environment
https://mew-next-app-storybook.vercel.app/
