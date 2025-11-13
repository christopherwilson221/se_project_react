import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
  };

  useEffect(() => {
    setData({
      username: "",
      password: "",
    });
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Login"
      buttonText="Login"
      name="login"
      isOpen={isOpen}
      closeModalClick={closeModalClick}
      onSubmit={handleSubmit}
    >
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="username">Login:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={data.username}
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={data.password}
          onChange={handleChange}
        />
        <div className="login__button-container">
          <button type="submit" className="login__link">
            Log in
          </button>
        </div>
      </form>

      <div className="login__signup">
        <p>Not a member yet?</p>
        <Link to="/RegisterModal" className="signup__link">
          Sign up here
        </Link>
      </div>
    </ModalWithForm>
  );
}

export default Login;