import { useNavigate } from "react-router-dom";
import AuthService from "../service/auth.service";
import { useContext } from "react";
import AuthContext from "../store/auth.context";

export default function Index() {
  let navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = e.target.email.value;
    const password = e.target.password.value;

    await AuthService.postLogin(
      user,
      password,
      (err) => {console.log(err);},
      (res) => {
        authContext.login();
        authContext.updateUser({
          email: res.email,
          alapiId: res.alapiId,
          companyName: res.companyName,
        });
        navigate("/home");
      }
    );
  };
  return (
    <div className="App">
      <h1>Welcome to Girvi Lenders</h1>
      <h2>Lgin</h2>
      <div>
        <form onSubmit={onSubmit}>
          <input required id ="email" type="email" placeholder="email" />
          <input required id ="password" type="password" placeholder="password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
