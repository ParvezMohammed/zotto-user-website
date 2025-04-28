import LoginNavbar from "../navbar/Loginnavbar";     
import LoggedInNavbar from "../navbar/LoggedinNavbar"; 

const Header = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <header className="w-full">
      {isLoggedIn ? <LoggedInNavbar /> : <LoginNavbar />}
    </header>
  );
};

export default Header;
