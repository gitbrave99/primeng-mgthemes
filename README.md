# CAMBIO DE THEME EN PRIMENG

## Se instala primeng y primeicons
- npm install primeng primeicons

## Se agregarn las dependencias de en archivo angular.json 
```
"styles": [
            "src/styles.css",
            "node_modules/primeicons/primeicons.css",
            "node_modules/primeflex/primeflex.css",
            "node_modules/primeng/resources/primeng.min.css",
          ]
```

## Se eligen los themes en este caso elegí 2
- lara-dark-blue
- lara-light-blue

## Se crean los archivos dentro de la carpeta /SRC
- theme-lara-dark-blue.scss 
- theme-lara-light-blue.scss

## En el archivo __**theme-lara-dark-blue.scss**__  agregamos el siguiente código
- @import "primeng/resources/themes/lara-dark-blue/theme.css";

## En el archivo __**theme-lara-light-blue.scss**__  agregamos el siguiente código
- @import "primeng/resources/themes/lara-light-blue/theme.css";


## Se agregan los themes en el archivo angular.json
```
{
  "input": "src/theme-lara-light-blue.scss",
  "bundleName": "lara-light",
  "inject": false
},
{
  "input": "src/theme-lara-dark-blue.scss",
  "bundleName": "lara-dark",
  "inject": false
}
```
## Quedando la configuracion
```
"styles": [
            "src/styles.css",
            "node_modules/primeicons/primeicons.css",
            "node_modules/primeflex/primeflex.css",
            "node_modules/primeng/resources/primeng.min.css",
            {
              "input": "src/theme-lara-light-blue.scss",
              "bundleName": "lara-light",
              "inject": false
            },
            {
              "input": "src/theme-lara-dark-blue.scss",
              "bundleName": "lara-dark",
              "inject": false
            }
          ]
```

## Dentro de la carpeta /app agregamos un servicio llamado theme.service.ts que tendra el siguiente código
```
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {

    constructor(@Inject(DOCUMENT) private document: Document) {}

    switchTheme(theme: string) {
        let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

        if (themeLink) {
            themeLink.href = theme + '.css';
        }
    }
}
```
## En el index agregamos el siguiente link
- `<link id="app-theme" rel="stylesheet" type="text/css" href="lara-dark.css">`

## En el archivo app.ts agregamos una función para cambiar de datos
```
changeTheme(theme: string) {
  this.themeService.switchTheme(theme);
}
```

## El archivo app.component tendremos 2 botones para cambiar los themes
`<p-button (click)="changeTheme('lara-light')" class="mr-3 cursor-pointer">`light`</p-button>`

`<p-button (click)="changeTheme('lara-dark')" class="mr-3 cursor-pointer">`dark`</p-button>`

## En el mismo archivo he usado un MenuBar donde agrego los botones para cambiar de modo dia/noche puedes revisarlo


## Corre el proyecto con
`ng serve`
