import queryString from 'query-string';
import {useState} from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { consultaApiByNombre } from '../helpers/consultaApiByNombre';

export const SearchPage = () => {

  const [personajesFilter, setPersonajesFilter] = useState([])
  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse(location.search);
  

  const [personaje, setPersonaje] = useState( q );

  const onchangePersonaje = (e) => {
    setPersonaje(e.target.value);
  };

  const obtenerPersonajes = async() => {
    const personajesData = await consultaApiByNombre(personaje);
    setPersonajesFilter(personajesData)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(personaje.length <= 1) return;

    navigate(`?q=${personaje}`);

    obtenerPersonajes( personaje );
  };


  return (
    <>
          <h1>SearchPage</h1>
          <hr />

          <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="searchText"
              placeholder="Busca un personaje por su nombre"
              autoComplete='off'
              className="form-control"
              value={personaje}
              onChange={onchangePersonaje}
              
              

            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>

        </div>

        <div className="col-7">
          <h4>Results: </h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__flipInX" 
            style={{display: (q === '') ? '' : 'none'}}>
            Busca un personaje
          </div>

          <div className="alert alert-danger animate__animated animate__flipInX" 
            style={{display: (q !== '') && ( personajesFilter.length === 0 ) ? '' : 'none'}}>
            Ningun personaje tiene el nombre <b>{ q }</b>
          </div>



          {
            personajesFilter.map( personaje => <Card key={personaje.id} personaje={personaje} /> )
          }
                  
        </div>  
      </div>
    </>
  )
}
