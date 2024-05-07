import { useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

import CustomInput from "../../components/input";

import "./index.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login-page-container app-content">
      <div className="form-container">
        <div className="form-title">Login</div>
        <form onSubmit={handleLogin}>
          <CustomInput
            label="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={setEmail}
            errorMessage="It should be a valid email"
            required={true}
          />
          <CustomInput
            label="Password"
            type={isShowPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={setPassword}
            errorMessage="Password must be at least 8 characters and contain at least one capital letter, one number and no spaces"
            required={true}
            pattern={`^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$`}
          >
            <button
              type="button"
              className="btn-password"
              onClick={() => setIsShowPassword((prev) => !prev)}
            >
              {isShowPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
            </button>
          </CustomInput>
          <button className="btn-login" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
