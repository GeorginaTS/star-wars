> Práctica Vue-router

# Vue-router 

![imagen_de_portada](https://vueschool.io/storage/media/9ea899b785de8ee088c77a71366e9678/master-the-vuejs-router-by-building-a-travel-app.png)

En esta actividad practicaremos como enrutar nuestra app de Vue.

## Objetivos

- Dominar la creación de **rutas**.
- Entender la diferáncia entre **vista** y **componente**.
- Generar rutas dinámicas.
- Usar los parámetros de ruta.
- Generar rutas anidadas.



---

### **Iniciamos la actividad** 

1. Entrar en la carpeta donde vamos a ubicar la actividad:
    1. Abre la **terminal**.
    2. Con los comandos `cd` y `cd ..` navegamos por nuestro ordenador hasta llegar a la dirección dónde queremos ubicar la actividad.

2. Abrir en enlace de la actividad en el navegador.
3. Clonar la actividad:
    1. Copiamos el link *https* del botón *Clone* de nuestro **Github**.
    2. Vamos a la **terminal** y, dentro de la carpeta donde queremos ubicar la actividad, escribimos el comando `git clone + (pegamos el link que habíamos copiado)`.

4. Abrir la actividad en el **Visual Studio Code**
    1. Entramos dentro de la carpeta que se ha generado con el comando `git clone`, haciendo `cd + (el nombre de la carpeta clonada)`.
    2. Dentro de la carpeta, escribimos el comando `code .` para abrir esta carpeta en el **VSC**.

---

#### :raised_hand::warning: Antes de empezar :point_down: 

Para utilizar **Vue con Vite y Tailwind**, tendremos que compilar. Para ello, sigue los siguientes pasos:

1. Abrir la carpeta del repositorio en la **terminal**.

2. Ejecutar el siguiente comando: `npm install`.

3. Una vez terminen de instalarse las dependencias, ejecutamos este otro comando: `npm run dev`.

4. Veremos que nuestra terminal queda inutilizada compilando, así que tendremos que abir otra para ejecutar los [comandos de guardado](#mientras-trabajamos-en-la-actividad)

5. No debemos cerrar la terminal compiladora hasta que queramos pararla. Para ello, utilizamos el comando: `ctrl + c`.

6. Recuerda que ahora ya no utilizaremos **live server** para abrir nuestro proyecto en el navegador, ahora lo haremos desde el enlace **localhost** que nos indica **Vite *en la terminal***. 

---
---
### :point_right: **Ejercicio** 

- Crea una App que nos de la información de las películas de **Star Wars**.
1. Cuando hagamos *clic* en cada película, iremos a la **vista de dicha película**.
2. En la vista de la película podremos *ver* que **personajes** han participado. Cada personaje debe ser clicable.
3. Cuando hagamos *clic* en un **personaje**, nos dará su **información**.

- **Bonus**: haz que se muestre un loading cuando los recursos tarden en llegar y un mensaje de error que se muestre cuando la petición sea errónea.

---
---

### **Mientras trabajamos en la actividad**

Mientras trabajamos en la actividad es muy importante ir guardando los cambios que vamos haciendo. Este **proceso de guardado** será el siguiente: 

1. El clásico `ctrl + s` o `cmd + s` en nuestro archivo del **VSC**.
2. Abrimos la **terminal**, comprobamos que nos encontramos en la ruta correcta y escribimos los siguientes comandos:
    1. `git add .`
    2. `git commit -m "mensaje"`
    3. `git push`

3. Vamos al navegador y comprobamos que se ha hecho correctamente en nuestro **Github**.


---

### Recursos 

- [Api Star Wars](https://swapi.dev/)
- [Vue-Router](https://router.vuejs.org/)