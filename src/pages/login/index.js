import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { loginAccount } from "../../store/user";
import { signIn } from "aws-amplify/auth";

import CustomInput from "../../components/input";

import "./index.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({ email, password });

    try {
      const res = await signIn({
        username: email,
        password: password,
      });
      console.log(res)
      if (res.isSignedIn) {
        dispatch(loginAccount({ email: email }));
        navigate("/jobs")
      }
      // dispatch(setNotification(notiLoginAccount));
      // const temp = document.querySelector(".login-widget-from-nav");
      // if (temp) temp.style.display = "none";
    } catch (error) {
      console.log("error signing in", error);
    }
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
            setState={(value) => setEmail(value)}
            errorMessage="It should be a valid email"
            required={true}
          />
          <CustomInput
            label="Password"
            type={isShowPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            setState={(value) => setPassword(value)}
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
