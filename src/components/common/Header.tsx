import { useAuth } from "../../context/AuthContext";
const Header = () => {
  const { Auth } = useAuth() as { Auth: boolean };
  const { logout } = useAuth() as {
    logout: () => void;
  };
  return (
    <div className="navbar bg-black shadow-sm text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Sam Corporate</a>
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
