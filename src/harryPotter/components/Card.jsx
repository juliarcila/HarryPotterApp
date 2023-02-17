import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({personaje}) => {
  return (
    <div className='col'>
      <div className='card mb-4'>
        <img className='card-img-top animate__animated animate__fadeIn' src={personaje.imagen} alt={personaje.apodo} />
        <div className='card-body'>
          <h5 className='card-title'>{personaje.personaje}</h5>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Apodo:</b> {personaje.apodo} </li>
          <li className='list-group-item'><b>Casa:</b> {personaje.casaDeHogwarts} </li>
          <li className='list-group-item'><b>Hijos:</b> {personaje.hijos} </li>
          <li className='list-group-item'><b>Interpretado por: </b>{personaje.interpretado_por}</li>
        </ul>
        <div className='card-body'>
          <Link to={`/character/${personaje.apodo}`}>
            Mas...
          </Link>
        </div>
      </div>
    </div>

  )
}
