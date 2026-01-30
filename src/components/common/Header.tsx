const Header = () => {
  return (
    <div className="navbar bg-black shadow-sm text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Sam Corporate</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Guest</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
