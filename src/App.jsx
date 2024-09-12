import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleClick = (e) => {
    if (user && password) {
      setLogin(true);
    } else {
      alert("por favor ingresa nombre de usuario y contraseña");
    }
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {login ? (
        <div className="welcome">
          <h1>Bienvenidx a mi sitio web creado desde React!</h1>
        </div>
      ) : (
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Hola {user}</h1>
            <label htmlFor="user">Nombre de usuario</label>
            <input type="text" name="user" onChange={handleUserChange} />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={handlePasswordChange}
            />
            <button onClick={handleClick}>Ingresar</button>
          </form>
        </div>
      )}
    </>
  );
}

export default App;
