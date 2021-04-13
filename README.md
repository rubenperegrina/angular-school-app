Aplicación desplegada en este link: https://angular-school-app.vercel.app/

# Funcionamiento
- Aplicación creada con Angular 9 para poder gestionar programas educativos.
- Siguiendo este diseño https://www.figma.com/file/iscsa7GyIYrXm9uqsk0zCi/Tarjetas?node-id=42%3A210 se ha creado la app en formato tablet (1024x768).
- La aplicación esta diseñada para ser independiente de un backend y poder funcionar por si sola con localStorage.
- Esta preparada para conectar a un backend ya que las llamadas http y los servicios están creados, solo habría que comentar la linea backendProvider del fichero app.module.ts:
~~~
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        //Desconectar localStorage
        backendProvider
    ],
    bootstrap: [AppComponent]
~~~
- De esta forma dejaríamos de utilizar el localStorage y el fichero backend.ts.
- Gracias a la gestión de usuarios podemos almacenar distinta información para cada uno de ellos, cada usuario puede tener sus cursos completados o lecciones pendientes de visualizar.
- Los colores y algunos estilos de la aplicación están en el fichero variables.scss, por lo que es fácil de modificar cualquier estilo con solo cambiar este fichero.

# Pantallas
Login y registro
- Pantalla para crear nuevos usuarios y poder acceder a la aplicación.

Home
- Pantalla principal dónde visualizar los cursos disponibles y la última lección vista.
- Visualizando de forma dinámica e independiente para cada usuario el seguimiento de sus cursos.

Desglose sesión
- Pantalla con el listado de lecciones de un curso en específico.
- Una vez seleccionado un curso vemos el listado de las lecciones pudiendo diferenciarlas con un icono las vistas de las que no.

Antes de empezar
- Pantalla previa a la lección.
- Si pulsamos en empezar pase esta lección quedara marcada como vista para este usuario y aumentaremos el contador de sesiones completadas.

Configuración y navbar
- Menú lateral de la aplicación con selectores de idioma y curso (no disponibles pero fácilmente escalables en un futuro gracias a la gestión de usuarios).
- Botones de Home, Configuración y Logout.


# Arrancar proyecto
1. Instalar NPM.
2. Instalar angular con:
~~~
npm install -g @angular/cli
~~~
3. Instalar los paquetes necesarios en la carpeta raíz con:
~~~
npm i
~~~
4. Arrancar el proyecto en la carpeta raíz con:
~~~
ng serve
~~~
debe aparece 'Server is listening on localhost:4200'.