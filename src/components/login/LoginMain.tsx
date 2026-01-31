import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import type { AuthContextType } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { CheckEmail, CheckPassword } from "../../utils/validator";
import { bgImageUrl } from "../../constants/url";
const LoginMain = () => {
  const [inputVal, setInputVal] = useState({
    username: "sample@gmail.com",
    password: "12345!@Aa",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { login } = useAuth() as AuthContextType;
  const navigate = useNavigate();

  function handelLogin() {
    if (!CheckEmail(inputVal.username)) setErrorMessage("Invalid email");
    if (!CheckPassword(inputVal.password)) setErrorMessage("Invalid password");
    if (CheckEmail(inputVal.username) && CheckPassword(inputVal.password)) {
      login();
      navigate("/dashboard", { replace: true });
    }
  }
  return (
    <div
      className="bg-cover bg-center min-h-screen p-2"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="flex justify-center align-middle mt-20">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend pt-11.25">Login</legend>
          <label className="label">Username</label>
          <input
            type="text"
            className="input"
            placeholder="Username"
            value={inputVal.username}
            onChange={(e) => {
              setInputVal((prev) => ({
                ...prev,
                username: e.target.value.trim(),
              }));
            }}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={inputVal.password}
            onChange={(e) => {
              setInputVal((prev) => ({
                ...prev,
                password: e.target.value.trim(),
              }));
            }}
          />
          <button onClick={handelLogin} className="btn btn-neutral mt-4">
            Login
          </button>
          {errorMessage && (
            <p className="text-red-500 pt-5">{errorMessage} !</p>
          )}
        </fieldset>
      </div>
    </div>
  );
};

export default LoginMain;
