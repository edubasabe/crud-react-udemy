import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Error from "../UI/Error/Error";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isRegister, setIsRegister] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Ingrese email");
      return;
    }
    if (!password.trim()) {
      setError("Ingrese password");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe ser mayor a 6 caracteres");
      return;
    }

    setError(null);
  };

  return (
    <div className="mt-5">
      <h3 className="text-center text-2xl mb-1">
        {isRegister ? "Registro de usuario" : "Iniciar sesión"}
      </h3>
      <div className="flex justify-center">
        <div className="max-w-sm w-full mt-5">
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-100 py-2 px-4 mb-2 rounded border border-red-500">
                <Error>{error}</Error>
              </div>
            )}
            <Input
              type="email"
              placeholder="Ingresa un email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              type="password"
              placeholder="Ingresa una contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button
              type="submit"
              className="bg-blue-600 text-gray-200 hover:bg-blue-600 hover:text-white py-3 px-4 w-full"
            >
              {isRegister ? "Crear cuenta" : "Iniciar sesión"}
            </Button>
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              className="text-blue-500 hover:text-blue-400 hover:underline text-center block py-2 w-full focus:outline-none"
            >
              {isRegister
                ? "¿Ya tienes cuenta? Inicia sesión"
                : "¿No tienes cuenta? Regístrate"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
