import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {

  const navigate = useNavigate()
  const { login, user, inputName, setInputName } = useContext( AuthContext );
  const [bandera, setBandera] = useState(false);
  const onLogin = (e) => {

    e.preventDefault();
    if(inputName.length <= 1) {
      setBandera(true);
      setTimeout(() => {
        setBandera(false)
      }, 3000);
      return;
    }
    login(inputName);
    const lastPath = localStorage.getItem('lastPath') || '/';
    navigate(lastPath,{
      replace: true
    });
    setInputName('');
  };

  return (
    <>
      <div className='container mt-2'>
        <h1>LoginPage</h1>
        <form onSubmit={ onLogin }>
          <input
            type="text"
            className='form-control mb-2 w-50'
            placeholder='Ingrese un nombre de usuario'
            value={inputName}
            onChange={ (e) => setInputName(e.target.value) }
          />
          <button
            type='submit'
            className='btn btn-dark btn-lg'
          >
            Login
          </button>
        </form>
        <hr />
        {
          bandera
            && <p className='bg-danger rounded p-3 text-black text-center fs-4'>El mensaje debe tener mas de dos caracteres</p>
            
        }
      </div>
        
    </>
  )
}
