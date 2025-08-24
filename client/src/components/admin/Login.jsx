import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [service, setService] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8081/api/auth/login", {
        nom_service: service,
        password: password,
      });

      console.log("Login successful:", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("service", response.data.nom_service);
      localStorage.setItem("id_service", response.data.id_service);


      window.location.href = `/admin/${response.data.nom_service}`;


    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
      alert("❌ Login failed: " + (error.response?.data || error.message));
    }
  };

  return (
    <div className="bg-slate-200/30 border border-slate-600 rounded-md p-8 shadow-lg backdrop-blur-md relative">
      <h1 className="text-4xl font-bold text-center text-blue-950">Login</h1>
      <form onSubmit={onSubmitHandler}>
        {/* service / Service */}
        <div className="relative my-4">
          <input
            id="service"
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="peer block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:border-red-700 focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="service"
            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-800"
          >
            Service
          </label>
        </div>

        {/* Password */}
        <div className="relative my-4">
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none focus:border-red-700 focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-800"
          >
            Mot de passe
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mb-4 rounded-full bg-red-700 p-3 hover:bg-transparent border border-red-700 hover:text-red-700 font-bold text-white transition"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
