import { useState } from "react";
import { AtSign } from "lucide-react";
import axios from "axios";
import TextInput from "../TextInput/TextInput";
import PasswordInput from "../PasswordInput/PasswordInput";

const FORM_INITIAL_STATE = {
  email: "",
  password: "",
};

const FormLogin = ({ visibilityState, toggleForms }) => {
  const [formData, setFormData] = useState(FORM_INITIAL_STATE);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8090/api/user/signin", formData)
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
        ${visibilityState ? "translate-y-0" : "translate-y-full"}`}
      onSubmit={handleOnSubmit}
    >
      <h2 className="text-2xl text-center mt-4 mb-8">LogIn</h2>
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

      <button className="w-11/12 h-10 rounded-full bg-purple-600 text-white">
        LOGIN
      </button>
      <p className="font-light underline cursor-pointer text-center text-gray-500">
        Forgot your password?
      </p>
      <div className="flex flex-col flex-grow justify-end">
        <p
          className="font-light cursor-pointer text-center text-gray-500"
          onClick={toggleForms}
        >
          Don't have an account?
        </p>
      </div>
    </form>
  );
};

export default FormLogin;
