import React, { useState, useCallback, useEffect } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Error from "../../components/UI/Error/Error";
import { auth, db } from "../../firebase";
import Loader from "../../components/UI/Loader/Loader";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("userData")) {
      const userData = JSON.parse(sessionStorage.getItem("userData"));
      const { email: sessionEmail, password: sessionPassword } = userData;
      setEmail(sessionEmail);
      setPassword(sessionPassword);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Ingrese el email");
      return;
    }
    if (!password.trim()) {
      setError("Ingrese la contraseña");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe ser mayor a 6 caracteres");
      return;
    }

    setError(null);

    if (isRegister) handleRegister();
    else handleLogin();
  };

  const handleRegister = useCallback(async () => {
    setLoading(true);
    try {
      const {
        user: { email: createdEmail, uid },
      } = await auth.createUserWithEmailAndPassword(email, password);
      db.collection("users").doc(createdEmail).set({
        email: createdEmail,
        uid,
      });
      clearState();
    } catch (error) {
      console.error("handleRegister -> error", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [email, password, setLoading]);

  const handleLogin = useCallback(async () => {
    try {
      setLoading(true);
      const response = await auth.signInWithEmailAndPassword(email, password);
      console.log("handleLogin -> response", response);
      if (rememberMe) {
        sessionStorage.setItem("userData", JSON.stringify({ email, password }));
      }
      clearState();
      props.history.push("/admin");
    } catch (error) {
      console.log("handleLogin -> error", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [email, password, setLoading, props.history, rememberMe]);

  const clearState = () => {
    setEmail("");
    setPassword("");
    setError(null);
  };
  return (
    <>
      <Loader loading={Loading} />
      <div className="mt-5">
        <h3 className="text-center text-3xl mb-1 font-semibold">
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
                className="mb-2"
              />
              <Input
                type="password"
                placeholder="Ingresa una contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="mb-2"
              />
              {!isRegister && (
                <>
                  <label
                    htmlFor="remember-me"
                    className="flex items-center mb-2"
                  >
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="form-checkbox mr-2"
                      onChange={() => setRememberMe(!rememberMe)}
                      checked={rememberMe}
                    />

                    <span className="text-sm">Recuérdame</span>
                  </label>
                </>
              )}
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
    </>
  );
};

Login.propTypes = {};

export default withRouter(Login);
