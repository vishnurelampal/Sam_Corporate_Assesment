import { useState } from "react";
import Header from "../common/Header";

const LoginMain = () => {
  const [inputVal, setInputVal] = useState({
    username: "user",
    password: "password",
  });
  const [errorMessage] = useState<string>("Error logging in");

  return (
    <div>
      <Header />
      <div className="flex justify-center align-middle mt-20">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>
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
          <button className="btn btn-neutral mt-4">Login</button>
          {errorMessage && (
            <p className="text-red-500 pt-5">{errorMessage} !</p>
          )}
        </fieldset>
      </div>
    </div>
  );
};

export default LoginMain;
