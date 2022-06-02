import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, startGoogleLogin, startLoginwithEmailPassword } from "../../store/actions/auth";
import { useForm } from "../../useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {loading} = useSelector((state)=>state.ui)

  const initialState = {
    email: '',
    password: '',
  };

  const [formValues, handleInputChange] = useForm(initialState);
  const { email, password } = formValues;

  const loginGoogle = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLoginwithEmailPassword(email,password));
    //navigate('/',{replace:true})
    
    
  };

  return (
    <>
      <h3 className="auth__title">login</h3>
      <form>
        <input
          type="text"
          placeholder="ingrese email"
          name="email"
          className="auth__input"
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

        <button type="submit" className="btn btn-primary" onClick={handleLogin} disabled={loading}>
          Ingresar
        </button>

        <hr />
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b onClick={loginGoogle}>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Cretae new account
        </Link>
      </form>
    </>
  );
};
