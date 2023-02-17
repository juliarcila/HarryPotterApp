import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { consultaApiByApodo } from '../helpers/consulaApiByApodo';

export const CharacterPage = () => {

  const {apodo} = useParams();
  const [personaje, setPersonaje] = useState({})
  const navigate = useNavigate();

  const obtenerPersonajes = async() => {
    const personajeData = await consultaApiByApodo( apodo );
    setPersonaje(personajeData[0]);
  };

  useEffect(() => {
    obtenerPersonajes();
  }, [apodo])

  const onReturn = () => {
    navigate(-1);
  };

  return (
    <>
          <h1>CharacterPage</h1>
          <hr />

          {
            (Object.keys(personaje).length === 0) && <p>Cargando...</p>
          }


      <div className='row'>
        <div className="col-4">
          <img
            className='animate__animated animate__backInDown'
            src={personaje.imagen}
            alt={personaje.personaje}
          />
        </div>
        <div className="col-8">
          <h3>{personaje.personaje}</h3>
          <ul className='list-group list-gruop-flush'>
            <li className='list-group-item'><b>Apodo:</b> {personaje.apodo} </li>
            <li className='list-group-item'><b>Casa:</b> {personaje.casaDeHogwarts} </li>
            <li className='list-group-item'><b>Hijos:</b> {personaje.hijos} </li>
            <li className='list-group-item'><b>Interpretado por: </b>{personaje.interpretado_por}</li>
          </ul>

          <button 
            className='btn btn-outline-dark mt-2'
            onClick={ onReturn }
          >
            Regresar...
          </button>
        </div>
      </div>



    </>
  )
}
