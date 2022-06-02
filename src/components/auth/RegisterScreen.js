import React from "react";
import { useForm } from "../../useForm";
import validator from "validator";
import { useDispatch,useSelector } from "react-redux";
import { setError } from "../../store/actions/ui";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const initialState = {
    name: "niucolas",
    email: "nico@gmail.com",
    password: "casa1234",
    password2: "casa1234",
  };

  const {msgError} =useSelector((state)=> state.ui)
  
  const [formValues, handleInputChange] = useForm(initialState);

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log("formulario correcto!");
    }

    console.log(name, email, password, password2);
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("no ha ingresado un nombre"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email invalido"));
      return false;
    } else if (password !== password2) {
      dispatch(setError("las contraseñas no son iguales!"));
      return false;
    }

    return true;
  };

  return (
    <>

      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>

        {
            !msgError&&(
              <div>
                {msgError}
              </div>
            )
        }
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          onChange={handleInputChange}
          value={name}
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          value={email}
        />

        <input
          type="password"
          placeholder="ingrese contraseña"
          name="password"
          className="auth__input"
          onChange={handleInputChange}
          value={password}
        />

        <input
          type="password"
          placeholder="confirm"
          name="password2"
          className="auth__input"
          onChange={handleInputChange}
          value={password2}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Registrar
        </button>

        {/*   <Link to='/auth/register'
            className='link'
        >
            Cretae new account
        </Link> */}
      </form>
    </>
  );
};
