### Item ###
* Recibe un objeto producto individual a través de sus props.
* Muestra la información resumida del producto (imagen, título, precio, etc.).
* Contiene un botón o enlace (como un Link de React Router) para que el usuario pueda hacer clic y ver el detalle completo de ese producto en específico.

### ItemList ###
* Recibe el array de productos a través de las props desde el ItemListContainer.
* Recorre ese array utilizando el método .map().
* Por cada elemento del array, renderiza una instancia individual del componente Item.

- A quién le pasa los datos: Le pasa un producto individual a cada Item mediante props.

### ItemListContainer ###
* Se conecta a una API o base de datos (por ejemplo, Firebase) para pedir la lista completa de productos.
* Maneja estados (useState) para guardar los productos y un indicador de carga (loading).
* Utiliza efectos (useEffect) para hacer la petición al montar el componente.

- A quién le pasa los datos: Renderiza y le pasa los productos obtenidos mediante props a su componente hijo: ItemList.