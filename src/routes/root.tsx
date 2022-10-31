import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Login from "../components/login";
import { useAuth } from "../context";

const Root = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <main>
      <Login />
      <Outlet />
    </main>
  );
};

export default Root;
