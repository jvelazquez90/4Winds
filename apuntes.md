npm create vite@latest mi-proyecto-react --template react
npm install
npm run dev

dentro de src/components
	Header/Header.jsx
	Nav/Nav.jsx
	Main/Main.jsx
	Footer/Footer.jsx


el return va con ();
{{va un objeto}}
{para pasar la sintaxi que va adentro}
css dentro del jsx en camelCase

componente layout (el header y el footer siempre lo mismo)
en nuestro caso layout publico y otro layout de administracion, cada uno con interfaz diferente


#v21454925fcy-01

ESTILOS

css modules
	MiComponente.module.css

import styles from './MiComponente.module.css'


aplica: className={styles.miClase}
si se utiliza kebab-case: className={styles["mi-clase"]}

-----------------
CLASE 5

useEffect(arrow function,array de dependencias)

ORGANIZACION DE NUESTRAS CARPETAS
src: todo
public: asset, carpetas estaticas, el json vamos a ponerlo en la carpeta public porque tiene que estar disponible para el navegador
imagenes, fuentes, json. todo lo estatico. no se procesa, se copia tal cual a la version final.

estado de carga
estado de errores

-----------------
CLASE 6

REACT ROUTER DOM
navegacion. SPA

react router es una libreria. hay que instalarla
npm install react-router-dom

BrowserRouter -> habilita el enrutamiento dentro de la aplicacion

rutas estaticas -> no dependen de datos dinamicos y se configuran de manera fija

el Router debe montarse sobre main.jsx o en App.jsx, pero no en ambas a la vez

Router tiene Outlet -> es el lugar que espera para llenarse con el componente que venga

componente Link -> utilizado para crear enlaces de navegacion. es el encargado de la barra del navegador

parametros variables.muestra el producto que coincide con el id -> /products/:id 

-----------------
CLASE 7

EVENTOS

onChange

e.target.value -> se obtiene el valor actual

<input 
	value={nombre} 
	onChange={(e) => setNombre(e.target.value)} 
/>

onSubmit -> envio del formulario

e.preventDefault() -> evita la recarga completa de la pagina

<form onSubmit={(e) => {
	e.preventDefault();
	console.log()
}}>
{}
</form> 

handle se le suele llamar a eventos que maneejan cosas



DESTRUIR PAGINA
https://destroy.spritefusion.com/
https://destroy.spritefusion.com/?url=aleric.dev&trk=public_post_comment-text

bazar
https://drive.google.com/drive/folders/1VBPgjCADI9zWnyGido2PU-GjcRNkb8wY
deco
https://drive.google.com/drive/folders/1VEjmvbZIPyVj-8W3GNBP1VmKSAv7ZwzK
ofertas
https://drive.google.com/drive/folders/1SCXanCR5vAPtEAeWVPwKNnqWMpcNNapC
blanqueria
https://drive.google.com/drive/folders/1VPGavQ8aQfXs19jbgsXLdfpNCfsTHq2C
marroquineria
https://drive.google.com/drive/folders/1VPWStrTQrRF3BtN3GVAmsJZZjt4qgQ4P
electro
https://drive.google.com/drive/folders/1ZmAceUvvTAu3sEhBkACNyO2nTjE_B-au