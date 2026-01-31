import { logoUrl } from "../../constants/url";
import { useAuth } from "../../context/AuthContext";
const Header = () => {
  const { Auth } = useAuth() as { Auth: boolean };
  const { logout } = useAuth() as {
    logout: () => void;
  };
  return (
    <div className="navbar bg-[#F7F7F7] shadow-sm text-black">
      <div className="flex-1">
        <a className=" btn-ghost text-xl">
          <img
            src={logoUrl}
            className="h-19 w-36 mr-2 cursor-pointer"
            alt="Sam Corporate Logo"
          />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>{Auth ? "User" : "Guest"}</a>
          </li>
          <li>
            {Auth && (
              <button onClick={logout} className="btn btn-sm btn-ghost">
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
