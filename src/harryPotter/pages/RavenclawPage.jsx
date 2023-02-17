import {useState, useEffect} from 'react'
import { ListCard } from '../components/ListCard';
import { consultaApi } from '../helpers/consultaApi';

export const RavenclawPage = () => {

  const [personajes, setPersonajes] = useState([])
  const [count, setCount] = useState(0);

  const obtenerPersonajes = async() => {
    const personajesData = await consultaApi('Ravenclaw');
    setPersonajes(personajesData);
  };

  useEffect(() => {
    obtenerPersonajes();
  }, [])

  return (
    <>
        <h1>RavenclawPage</h1>
        <hr />

        {
          personajes.length === 0 
            && <p>Cargando...</p>
        }

        <ListCard personajes={personajes} />
    </>
  )
}
