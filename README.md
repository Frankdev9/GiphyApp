-> https://giphy-react-app-f.netlify.app/

# Notas del desarrollo

1- Cuando nos encontramos con la siguiente situacion

/
<>

<h3>{category}</h3>
<ol> {images.map(({ id, title }) => {
return <li key={ id }>{ title }</li>
})} </ol>

/

En el images.map -> cuando se pasa la key de control se pueden pasar directamente una destructuracion de las propiedades del objeto en cuestion en nuestro caso images.map tiene -> `id` y `title` e insertarlas directamente sin tener que hacer => (->varControl.propiedad<- )
