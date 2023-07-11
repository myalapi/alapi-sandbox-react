import { useNavigate } from "react-router-dom";
import AuthService from "../service/auth.service";

export default function Index() {
  let navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
      companyName: e.target.company.value,
    };
    //create account in recure ai and gets a merchant Id
    await AuthService.postSignup(
      body,
      (err) => {},
      () => {
        navigate("/login");
      }
    );
  };
  return (
    <div className="App">
      <h1>Welcome to Girvi Lenders</h1>
      <h2>Sin up to get a loan</h2>
      <div>
        <form onSubmit={onSubmit}>
          <input required id="company" type="text" placeholder="company name" />
          <input required id ="email" type="email" placeholder="email" />
          <input required id="password" type="password" placeholder="password" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
