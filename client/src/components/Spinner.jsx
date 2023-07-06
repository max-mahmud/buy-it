import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => (c -= 1));
    }, 1000);
    count === 0 && navigate("/login", { state: location.pathname });
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="Text-center">redirecting to you in {count} second </h1>
        <div className="spinner-border" role="status"></div>
      </div>
    </>
  );
};

export default Spinner;
