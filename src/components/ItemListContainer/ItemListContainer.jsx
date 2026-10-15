import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [ products, setProducts ] = useState( []   );
  const [ errors  , setErrors   ] = useState( null );
  const [ loading , setLoading  ] = useState( true );

  useEffect( () => {
    fetch( "/data/products.json" )
      .then( ( response ) => {
        if ( !response.ok ) {
          throw new Error( "Error al cargar los productos" );
        }

        return response.json();
      } )
      .then(    ( data  ) => setProducts( data          ) )
      .catch(   ( error ) => setErrors  ( error.message ) )
      .finally( ()        => setLoading ( false         ) );
  }, [] );

  if ( loading ) return <p> Cargando... </p>;
  if ( errors  ) return <p> { errors } </p>;

  return (
    <section>
      <h1> Catálogo </h1>
      <ItemList products={ products } />
    </section>
  );
};
