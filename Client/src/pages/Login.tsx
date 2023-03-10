import "../styles/main.scss";
import logo from "../assets/images/logo.svg";
import LoginImg from "../assets/images/pablo-sign-in 1.png";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
interface IProps {
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}
const Login: React.FC<IProps> = ({ loggedIn, setLoggedIn }: IProps) => {
  const log = () => {
    setLoggedIn(!loggedIn);
  };
  return (
    <section className="Login">
      <div className="Container">
        <div className="left">
          <img src={logo} alt="logo" className="logo" />
          <img src={LoginImg} alt="Login Image" className="LoginImg" />
        </div>
        <div className="right">
          <div className="title">Welcome!</div>
          <p className="text">Enter details to login.</p>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </form>
          <a href="#" className="forget">
            FORGOT PASSWORD?
          </a>
          <Link to="/" className="btn" onClick={log}>
            LOG IN
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
