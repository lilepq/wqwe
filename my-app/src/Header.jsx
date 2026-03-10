import logo from "./assets/logo.svg";
function Header() {
  return (
    <header className="header">
      <div className="logo-left">
        <img src={logo} alt="логотип" />
      </div>

      <div className="divider"></div>

      <div className="logo-right">
        <h1>КРИОС</h1>
        <p>КЛИМАТИЧЕСКОЕ ОБОРУДОВАНИЕ</p>
      </div>
    </header>
  );
}

export default Header;