# QA_Automation_Test Javascript and Playwright with Page Object Model
QA Automation - Testing Bolivia

![Playwright Logo](https://miro.medium.com/v2/resize:fit:720/format:webp/1*gMiUPuRGC36nxZHe2zthOg.png)

## Contenido

1. [Descripción](#descripción)
3. [Requisitos Previos](#requisitos-previos)
4. [Instalación](#instalación)
5. [Ejecución de Pruebas](#ejecución-de-pruebas)
6. [Informes y Resolución de Defectos](#informes-y-resolución-de-defectos)
7. [Referencias](#referencias)

## Descripción

La página a ser probada es Todo.ly: https://todo.ly/ 

En esta prueba se realizará la automatización de los siguientes flujos:

* Login
* Register (Sign Up Free)
* Inbox &gt; Crear
* Inbox &gt; Actualizar
* Inbox &gt; Eliminar
* Logout

## Requisitos previos

Antes de comenzar, se debe tener instalado lo siguiente:

- Node.js: [Descargar e Instalar Node.js](https://nodejs.org/)
- NPM (Gestor de Paquetes de Node.js): Viene incluido con Node.js
- Visual Studio Code: Como IDE

## Instalación

Sigue estos pasos para instalar las dependencias del proyecto:

1. Clona el repositorio desde GitHub:

   ```bash
    git clone https://github.com/marioly7/QA_Automation_Test.git
    ``` 

3. Abre Visual Studio Code o el IDE de tu preferencia, selecciona Folder > Open Folder y selecciona la carpeta QA_Automation_Test


5. Selecciona Terminal > New Terminal e ingresa el siguiente comando para trabajar con la última versión de Playwright.

   ```bash
    npm init playwright@latest
    ```

6. Selecciona la opción "JavaScript"

7. Nombrar la carpeta para las pruebas como "tests"

8. GitHub Actions > False

9. Escoger la opción para instalar las últimas versiones de los navagadores.

10. Si existen mensajes para sobreescribir los archivos seleccionar False.

9. Verificar en el archivo playwright.config.js que testDir sea:

   ```bash
    testDir: './tests/test'
    ```

## Ejecución de Pruebas

1. En la terminal ingresamos el siguiente comando que ejecutará todas las pruebas en la carpeta "test".

    ```bash
    npx playwright test
    ```

2. Si se desea visualizar las pruebas que realiza el navegador en tiempo real, ingresamos el siguiente comando (en este caso elegimos chromium como navegador):

    ```bash
    npx playwright test --project=chromium --headed
    ```

3. (OPCIONAL) Se puede agregar el flag  `--workers <núm. workers>`  al final para limitar la cantidad de workers que se ejecutan en paralelo

    ```bash
    npx playwright test --project=chromium --headed --workers <núm. workers>
    ```

## Informes y Resolución de Defectos

1. Revisar el reporte de los tests ejecutados con el comando

     ```bash
    npx playwright show-report
    ```

## Referencias

[Lista de assertions en Playwright](https://playwright.dev/docs/test-assertions)

