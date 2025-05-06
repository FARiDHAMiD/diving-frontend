import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const Login = () => {
  const { user, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="d-flex justify-content-center">
      <div className="col-6">
        <main className="form-signin w-100 m-auto">
          <form className="my-2" onSubmit={loginUser}>

            <div className="text-center">
              <img
                className="mb-4"
                src="/assets/logo.png"
                alt=""
                width={72}
                height={57}
              />
            </div>
            <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
            <div className="form-floating my-2">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control my-2"
                id="floatingInput"
                required
              />
              <label htmlFor="floatingInput">username</label>
            </div>
            <div className="form-floating my-2">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control my-2"
                id="floatingPassword"
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue="remember-me"
                id="checkDefault"
              />
              <label className="form-check-label" htmlFor="checkDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>

            <Link to={`/signup`} className="btn btn-success w-100 py-2 my-2">
              Register New Account Here
            </Link>
            <p className="mt-5 mb-3 text-body-secondary text-center">
              © 2024–2025
            </p>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
