import LOGO from "../../assets/logo.svg";
const Logo = () => {
  return (
    <div className="ml-4 flex lg:ml-0">
      <a href="#">
        <span className="sr-only">Your Company</span>
        <img className="h-8 w-auto" src={LOGO} alt="" />
      </a>
    </div>
  );
};

export default Logo;
