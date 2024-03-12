# Aplicación de Contador en Angular

Esta aplicación Angular demuestra un contador simple con características adicionales como un hipervínculo y una frase dinámica de un componente hijo. La aplicación proporciona una interfaz de usuario minimalista y utiliza las capacidades de Angular para crear aplicaciones web interactivas.

## Características

- **Contador:** La característica principal de la aplicación es un contador que muestra el número de segundos desde que se cargó la página. Se actualiza en tiempo real.
- **Hipervínculo:** Hay un hipervínculo proporcionado en la interfaz de usuario que dirige a los usuarios a una página web específica. Esto muestra la capacidad de Angular para manejar la navegación dentro de la aplicación.
- **Frase Dinámica:** Se muestra una frase en la interfaz de usuario, obtenida de un componente hijo. Esto demuestra la capacidad de Angular para gestionar la comunicación entre componentes padre e hijo.

## Tecnologías Utilizadas

- **Angular:** La aplicación está construida utilizando el framework Angular, que proporciona una estructura robusta para desarrollar aplicaciones de página única.
- **HTML:** Se utiliza HTML (Lenguaje de Marcado de Hipertexto) para estructurar la interfaz de usuario de la aplicación.
- **CSS:** Se utilizan Hojas de Estilo en Cascada para dar estilo a los elementos HTML y proporcionar una interfaz visualmente atractiva.


## Logica de la Aplicación
-Utilizamos una corutina que se ejecuta cada segundo para actualizar el contador.
```
  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.seconds++;
    }, 1000);
  }
```
-Utilizamos un componente hijo para mostrar una frase dinámica en la interfaz de usuario.
```
<app-aether></app-aether>
```

-Ponemos en el html el enlace de lo que queramos, en este caso mi github.
```
{ title: 'SilverClick, ',link: 'https://github.com/SilverClick' }
```
## Uso

Una vez que la aplicación esté en funcionamiento, puedes interactuar con ella de las siguientes maneras:

- **Contador:** Observa el contador en la interfaz de usuario, que muestra el número de segundos desde que se cargó la página.
- **Hipervínculo:** Haz clic en el hipervínculo proporcionado para navegar a mi github.
- **Frase Dinámica:** Observa la frase dinámica mostrada en la interfaz de usuario, que se obtiene de un componente hijo.



