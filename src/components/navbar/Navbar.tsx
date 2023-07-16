import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" title="hv-admin" />
        <span>HV-ADMIN</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png"
            alt=""
          />
          <span>Harsh</span>
        </div>
        <img src="settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
