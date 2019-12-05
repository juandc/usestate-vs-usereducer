# useState vs. useReducer: Guerra de Paradigmas, no de herramientas - #ReactHooks

_Vamos a estudiar cómo aplicar el principio de la Programación Declarativa al manejo del Estado de nuestros componentes con React Hooks._

Tanto useState como useReducer tienen el mismo objetivo: manejar el estado local de nuestros componentes. La diferencia está en el camino que nos ofrecen para llegar a una solución. No hay ganadores, simplemente hay herramientas y paradigmas que se adaptan mejor a nuestros objetivos.

## Paradigma > Herramienta

La palabra **paradigma significa forma de pensar**. Los paradigmas de programación son formas de pensar para resolver un problema con código. Entender que NO hay formas de pensar correctas o incorrectas es fundamental para crecer profesionalmente y convertirte en la mejor desarrolladora que puedes ser.

Hay paradigmas que se adaptan muy bien a diferentes situaciones, así que usarlos nos da cierta facilidad para resolver cierto tipo de problemas. Saber cuándo usar un paradigma u otro nos hace muy eficientes para resolver todo tipo de problemas. Pero cerrarnos a una sola forma de pensar nos hará mil veces menos eficientes.

Teniendo esto claro, vamos a estudiar los diferentes paradigmas que representan los React Hooks que manejan el estado de nuestros componentes: **useState** y **useReducer**.

![LET IT BEGIN!](https://media.giphy.com/media/13gLgmy3FfsP6g/giphy.gif)

## Primero lo primero: ¿qué carambas son los Hooks?

Antes de los Hooks, los componentes lógicos se creaban usando clases que extienden de **`React.Component`** y los componentes presentacionales (sin lógica, solo UI) usando funciones. Esto se debía a que solo con los componentes creados como clases podíamos usar algunas características de React: el estado (**`this.state`**) y los métodos de ciclo de vida (**`componentWillMount`**, **`componentDidMount`**, **`componentWillUpdate`**, entre otros).

Los Hooks nos permiten implementar algunas de estas funcionalidades de React en componentes creados con funciones. No funcionan exactamente igual, pero nos traen muchos beneficios: es menos trabajo para el compilador, nuestras aplicaciones son mucho más livianas y nuestro código es mucho más limpio.

```js
// React usando clases:
class Componente extends React.Component {
  constructor() {
    this.state = { likes: 1 };
  }

  render() {
    return (
      <div>
        <p>Cantidad de likes: {this.state.likes}</p>
        <button
          onClick={() => this.setState({ likes: this.state.likes + 1 )}}
       >¡Like!</button>
      </div>
    );
  }
}

// React usando funciones y Hooks:
function Componente() {
  const [likes, setLikes] = React.useState(1);

  return (
      <div>
        <p>Cantidad de likes: {likes}</p>
        <button onClick={() => setLikes(likes + 1)}>¡Like!</button>
      </div>
    );
}
```

> :point_right: [¿Sabías que compilar un componente de tipo clase es más trabajo para Babel?](https://platzi.com/blog/necesitamos-saber-react-avanzado/)
> :point_right: [¿Cuándo crear un Componente? Estructura, Organización y Tipos de Componentes en React](https://platzi.com/blog/estructura-organizacion-y-tipos-de-componentes-en-react/)

## Proyecto

Nuestro proyecto será una caja de confirmación con los siguientes requerimientos:

- **Código de seguridad**: el usuario debe escribir la contraseña “secreta” para confirmar que quiere realizar la eliminación.
- **Botón de comprobar, mensajes de cargando y error**: cuando el usuario escriba la contraseña debe darle clic al botón de comprobar el código. Este botón simulara una solicitud a alguna API. Mientras carga, debemos mostrar un mensaje de “cargando”. Y si el código es incorrecto, debemos pedirle al usuario que lo intente de nuevo.
- **Ultra confirmación**: si el código es correcto, dejamos de mostrar el campo donde el usuario escribe la contraseña y le preguntamos si está seguro de que quiere realizar la eliminación. El usuario tiene la opción de cancelar y volver a la pantalla anterior. O también puede confirmar definitivamente.
- **Eliminado**: cuando el usuario haya pasado por todo este proceso debe poder recuperar el estado anterior haciendo clic en un botón que diga “¡me arrepiento, devuelvanme al estado anterior!”.

Puedes ver el demo de la aplicación aquí: [juandc.co/usestate-vs-usereducer/](http://juandc.co/usestate-vs-usereducer/).

## Interfaz (UI)

Primero nos encargaremos de la UI. Luego añadiremos la lógica y el estado a nuestro componente.

...

Puedes leer el resto del tutorial en: https://platzi.com/blog/usestate-vs-usereducer.
