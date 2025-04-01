import toast from "react-hot-toast";
import { useNavigate, NavLink } from "react-router-dom";
import { API_BASE_URL } from "../../config";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.clear();
    toast.success("Logged out successfully!");
    navigate("/");
  };

  return (
    <>
      <nav className="home-header" style={{position: "sticky"}}>
        <h1 className="header-title">🍽 RestoQR</h1>
        <button onClick={handleLogout} className="headder-button">
          LOGOUT{" "}
        </button>
      </nav>
    </>
  );
};

export default Header;
