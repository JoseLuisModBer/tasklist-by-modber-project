ESPAÑOL:

# TASKLIST BY MODBER

- App para hacer listas de tareas pendientes.

## AUTOR:

```
Este proyecto ha sido creado por Jose Luis Modroño Berdiñas (ModBer) utilizando React.
```

## DESCRIPCIÓN DEL PROYECTO:

```
Una tasklist fácil de usar, ideal para hacer la lista de la compra o apuntar tareas pendientes. Haz tu vida más fácil con tasklist by ModBer.
```

## CÓMO DESPLEGAR ESTE PROYECTO EN TU PC:

Para desplegar este proyecto en tu PC basta con seguir estos pasos:

- Copia el código SSH de mi repositorio de GitHub.
- Usa el terminal para posicionarte en la ruta donde desees descargar mi repositorio.
- Una vez posicionado, introduce el comando git clone seguido del SSH para clonar mi repositorio en tu pc.

```
git clone git@github.com:JoseLuisModBer/tasklist-by-modber-project.git
```

- Abre el proyecto con algún editor de código (recomiendo Visual Studio Code).
- Usa el terminal para ejecutar el comando npm i (de este modo instalarás las dependencias necesarias y se creará la carpeta "node_modules").

```
npm i
```

- Utiliza el comando npm start para lanzar el proyecto en tu navegador.

```
npm start
```

## CÓMO USAR ESTA APP:

Una vez abierta la app "TaskList by ModBer" siga los siguientes pasos:

- Inserte una nueva tarea en el input y pulse "Añadir tarea" para agregar dicha tarea a la lista.

- Verá como la tarea se añade en el contenedor inferior.

- Cada tarea cuenta con un botón tipo checkbox que puede pulsar para marcar o desmarcar dicha tarea como realizada o no.

- En caso de que usted inserte una tarea que desee borrar, basta con marcarla como realizada y luego pulsar el botón "Borrar realizadas".

- Finalmente puede pulsar el botón "Borrar tareas" para eliminar la lista de tareas (tanto las realizdas como las no realizadas).

## CÓMO GUARDAR SUS LISTAS:

```
No se preocupe si cierra la aplicación, "TaskList by ModBer" guardará la lista de tareas creada hasta que usted pulse el botón "Borrar tareas", siempre y cuando abra la aplicación desde el mismo dispositivo y desde el mismo navegador (y siempre y cuando usted no borre las cookies).
```

## DESCRIPCIÓN TÉCNICA DEL PROYECTO:

Esta App ha sido creada íntegramente con React (usando npx create-react-app). En este caso, al tratarse de un proyecto que empecé en 2022, no recurrí al uso de VITE (que es mi opción por defecto actualmente).

El componente principal "App" pinta un div que contiene:

- una llamada al componente "header".
- un main en el que se llama, por medio de rutas, al componente "List" o al componente "instructions" (según el caso).
- una llamada al componente "footer".

Será en el menú de "Header" donde decidiremos qué sección pintar dentro del main.

Los datos de la lista son guardados en el localstorage del navegador en el que se ejecute esta App.

El diseño de la aplicación ha sido desarrollado de forma responsive para que se adapte a los diversos dispositivos del mercado (móvil, tablet y pc).

### JOSE LUIS MODROÑO BERDIÑAS (MODBER) | 2023:

Link a mi perfil de GitHub: https://github.com/JoseLuisModBer

---

---

ENGLISH:

# TASKLIST BY MODBER

- App to make to-do lists.

## AUTHOR:

```
This project has been created by Jose Luis Modroño Berdiñas (ModBer) using React.
```

## PROJECT DESCRIPTION:

```
An easy-to-use tasklist, ideal for making a shopping list or writing down pending tasks. Make your life easier with tasklist by ModBer.
```

## HOW TO DEPLOY THIS PROJECT ON YOUR PC:

To deploy this project on your PC, just follow these steps:

- Copy the SSH code from my GitHub repository.
- Use the terminal to position yourself in the path where you want to download my repository.
- Once positioned, enter the command git clone followed by SSH to clone my repository on your pc.

```
git clone git@github.com:JoseLuisModBer/tasklist-by-modber-project.git
```

- Open the project with a code editor (I recommend Visual Studio Code).
- Use the terminal to run the npm i command (this will install the necessary dependencies and create the "node_modules" folder).

```
npm i
```

- Use the npm start command to launch the project in your browser.

```
npm start
```

## HOW TO USE THIS APP:

Once the "TaskList by ModBer" app is open, follow these steps:

- Insert a new task in the input and click "Add task" to add the task to the list.

- You will see how the task is added in the lower container.

- Each task has a checkbox type button that you can click to mark or unmark said task as done or not.

- In case you insert a task that you want to delete, just mark it as done and then press the "Delete done" button

- Finally you can press the "Delete tasks" button to delete the list of tasks (both those done and those not done).

## HOW TO SAVE YOUR LIST:

```
Don't worry if you close the app, "TaskList by ModBer" will save the created task list until you press the "Clear Tasks" button, as long as you open the app from the same device and from the same browser (and as long as you you do not delete cookies).
```

## TECHNICAL DESCRIPTION OF THE PROJECT:

This App has been created entirely with React (using npx create-react-app). In this case, as it is a project that I started in 2022, I did not resort to using VITE (which is currently my default option).

The main "App" component paints a div containing:

- a call to the "header" component.
- a main in which the "List" component or the "instructions" component (depending on the case) is called, by means of routes.
- a call to the "footer" component.

It will be in the "Header" menu where we will decide which section to paint within the main.

The data of the list is saved in the localstorage of the browser in which this App is executed.

The design of the application has been developed in a responsive way so that it adapts to the various devices on the market (mobile, tablet and PC).

### JOSE LUIS MODROÑO BERDIÑAS (MODBER) | 2023:

Link to my GitHub profile: https://github.com/JoseLuisModBer
