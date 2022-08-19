import './login.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import validate from '../../utils/validate.js';

export default function Login(){
  const {loginWithRedirect} = useAuth0();

  const [input, setInput] = useState({
    user: '',
    pass: '',
  });
  const [errors, setErrors] = useState({});

  const inputChange = (e) => {
    const {name, value} = e.target;
    setInput({...input, [name]: value})
    setErrors(validate({...input, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('mandar form al backend');
  }

  return (
    <div className="login">
      <div className="login-logo">
        Musicfy Logo
      </div>
      <hr></hr>
      <div className="login-container">
        <div className="login-options">
          <p>Para continuar, inicia sesión en Musicfy.</p>
          <button
            onClick={() => loginWithRedirect()}
          >
            CONTINUAR CON AUTH0
          </button>
        </div>
        <hr></hr>
        <form
          className="login-form"
          onSubmit={handleSubmit}
        >
          <label>Correo electrónico o nombre de usuario</label>
          <input
            type='text'
            name="user"
            placeholder="Correo electronico o nombre de usuario"
            onChange={inputChange}
            value={input.user}
            className={errors.user ? 'input-err' : ''}
          />
          <p className='msg-err'>{errors.user || ''}</p>
          <label>Contraseña</label>
          <input
            type='password'
            name="pass"
            placeholder="Contraseña"
            onChange={inputChange}
            value={input.pass}
            className={errors.pass ? 'input-err' : ''}
          />
          <p className='msg-err'>{errors.pass || ''}</p>
          <div>
            <button>
              INICIAR SESION
            </button>
          </div>
        </form>
        <hr></hr>
        <p>¿No tienes cuenta?</p>
        <button>
          REGISTRATE EN MUSICFY
        </button>
      </div>
    </div>
  )
}
