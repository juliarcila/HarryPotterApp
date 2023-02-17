import {useState, useEffect} from 'react'
import { ListCard } from '../components/ListCard';
import { consultaApi } from '../helpers/consultaApi';


export const SlytherinPage = () => {

  const [personajes, setPersonajes] = useState([])
  const [count, setCount] = useState(0);

  const obtenerPersonajes = async() => {
    const personajesData = await consultaApi('Slytherin');
    setPersonajes(personajesData);
  };

  useEffect(() => {
    obtenerPersonajes();
  }, [])

  return (
    <>
        <h1>SlytherinPage</h1>
        <hr />

        {
          personajes.length === 0 
            && <p>Cargando...</p>
        }

        <ListCard personajes={personajes} />
    </>
  )
}
