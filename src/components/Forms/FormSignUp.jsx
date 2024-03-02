import { useState } from "react";
import { AtSign, User } from "lucide-react";
import axios from "axios";
import TextInput from "../TextInput/TextInput";
import PasswordInput from "../PasswordInput/PasswordInput";

const FORM_INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const FormSignUp = ({ visibilityState, toggleForms }) => {
  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
  //const [isFormDataCorrect, setIsFormDataCorrect] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /*const handlePasswordConfirmation = () => {
    if (formData.password === formData.confirmPassword) {
      setIsFormDataCorrect(true);
    }
  };*/

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8090/api/user/signup", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.data.message);
      });
  };

  return (
    <form
      className={`w-full h-full flex flex-col items-center absolute transition-transform
        ${visibilityState ? "translate-y-full" : "translate-y-0"}`}
      onSubmit={handleOnSubmit}
    >
      <h2 className="text-2xl text-center mt-4 mb-8 ">SignUp</h2>
      <TextInput
        name="username"
        onChange={handleChange}
        value={formData.username}
        type="text"
        placeholder="Username"
        icon={<User className="text-gray-500" />}
      />
      <TextInput
        name="email"
        onChange={handleChange}
        value={formData.email}
        type="email"
        placeholder="Email"
        icon={<AtSign className="text-gray-500" />}
      />
      <PasswordInput
        name="password"
        onChange={handleChange}
        value={formData.password}
        placeholder="Password"
      />
      <PasswordInput
        name="confirmPassword"
        onChange={handleChange}
        value={formData.confirmPassword}
        placeholder="Confirm your password"
      />

      <button className="w-11/12 h-10 rounded-full bg-purple-600 text-white">
        SIGN UP
      </button>
      <div className="flex flex-col flex-grow justify-end">
        <p
          className="font-light cursor-pointer text-center text-gray-500"
          onClick={toggleForms}
        >
          Do you already have an account?
        </p>
      </div>
    </form>
  );
};

export default FormSignUp;
