import React, { useContext, useEffect, useState } from 'react'
import { ListCard } from '../components/ListCard';
import { consultaApi } from '../helpers/consultaApi'



export const GriffindorPage = () => {


  const [personajes, setPersonajes] = useState([])

  const obtenerPersonajes = async() => {
    const personajesData = await consultaApi('Gryffindor');
    setPersonajes(personajesData);
  };

  useEffect(() => {
    obtenerPersonajes();
  }, [])

  
  

  return (
    <>  
        
        <h1>GryffindorPage</h1>
        <hr />

        {
          personajes.length === 0 
            && <p>Cargando...</p>
        }

        <ListCard personajes={personajes} />
    </>
    
  )
}
