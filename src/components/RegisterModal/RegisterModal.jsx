import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";

const Register = ({ handleRegister }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    handleRegistration(data);
  };

  useEffect(() => {
    setData({
      username: "",
      password: "",
      confirmPassword: "",
    });
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Register"
      buttonText="Register"
      name="register"
      isOpen={isOpen}
      closeModalClick={closeModalClick}
      onSubmit={handleSubmit}
    >
      <form className="register__form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
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
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={data.confirmPassword}
          onChange={handleChange}
        />
        <div className="register__button-container">
          <button type="submit" className="register__link">
            Register
          </button>
        </div>
      </form>

      <div className="register__signin">
        <p>Already a member?</p>
        <Link to="/LoginModal" className="register__login-link">
          Log in here
        </Link>
      </div>
    </ModalWithForm>
  );
}

export default Login;